src/
├── auth/
│   ├── strategies/
│   │   └── jwt.strategy.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
│   └── auth.controller.ts
├── users/
│   ├── entities/
│   │   └── user.entity.ts
│   ├── users.module.ts
│   ├── users.service.ts
│   └── users.controller.ts
├── products/
│   ├── entities/
│   │   └── product.entity.ts
│   ├── products.module.ts
│   ├── products.service.ts
│   └── products.controller.ts
├── common/
│   ├── filters/
│   │   └── http-exception.filter.ts
│   ├── interceptors/
│   │   └── transform.interceptor.ts
│   └── middleware/
│       └── logger.middleware.ts
├── config/
│   └── configuration.ts
├── database/
│   └── database.module.ts
├── app.module.ts
└── main.ts