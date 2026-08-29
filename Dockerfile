FROM node:20-alpine AS base

# Cài đặt libc6-compat (cần thiết cho một số thư viện Node) và openssl (cho Prisma)
RUN apk add --no-cache libc6-compat openssl

WORKDIR /app

# ---- Dependencies Stage ----
FROM base AS deps
COPY package.json package-lock.json ./
# Cài đặt toàn bộ dependencies (bao gồm devDependencies để Prisma generate)
RUN npm ci

# ---- Builder Stage ----
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build dự án (chạy prisma generate && next build như trong package.json)
RUN npm run build

# ---- Runner Stage ----
FROM base AS runner
WORKDIR /app

# Thiết lập môi trường Production
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy toàn bộ kết quả build, thư mục public và node_modules từ stage builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose port
EXPOSE 3000
ENV PORT=3000

# Khởi chạy Next.js
CMD ["npm", "run", "start"]
