This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Başlamadan Önce

Bu proje Reactjs'in artık zorunlu tuttuğu Next.js ile yazılmıştır.
Projede i18n kullanıldı 1 tercih eklendi http://localhost:3000/en adresinden görüntülenebilir.
Haberler https://newsapi.org/ üzerinden REST API (axios) kullanılarak çekildi. Bu haberler doğrudan geldiği için i18n kullanılamadı.
Haber detayları redux kullanılarak tüm uygulamaya dağıtıldı. Bazı haberler manuel olarak görüntülendi dilenirse değiştirilebilir.
Tailwind CSS kullanıldı.

Eğer uygulama kurulduğu bilgisayarda açılmazsa uygulamanın ekran görüntüleri aşağıya eklenmiştir.

![screencapture-localhost-3000-2023-10-21-18_51_57](https://github.com/mcem1kurt/HITATEKCase/assets/105525696/2a63cf09-f049-4c44-9a07-e0b8538bf857)

*****************************************************************************************************************************

![screencapture-localhost-3000-2023-10-21-18_52_19](https://github.com/mcem1kurt/HITATEKCase/assets/105525696/57a42883-d0a0-4283-89ef-1e8a0d4b0aae)

*****************************************************************************************************************************

![screencapture-localhost-3000-2023-10-21-18_52_43](https://github.com/mcem1kurt/HITATEKCase/assets/105525696/a13f3176-5a43-4538-bda6-fca4d90957a0)



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
