# Modern AliExpress (AliExpress Clone)

A compact yet feature-rich e-commerce app built with JavaScript, Vue.js, Nuxt.js, Prisma, and Supabase. It offers secure login via Google and GitHub OAuth, and safe transactions through Stripe. The UI, enhanced with Tailwind CSS, offers a modern and improved shopping experience.

<a href="https://modern-aliexpress.vercel.app/" target="_blank" rel="noreferrer"> 
    <img width="400" src="Screenshot/Screenshot (1).png">
    <img width="400" src="Screenshot/Screenshot (2).png">
    <img width="400" src="Screenshot/Screenshot (3).png">
    <img width="400" src="Screenshot/Screenshot (4).png">
    <img width="400" src="Screenshot/Screenshot (5).png">
    <img width="400" src="Screenshot/Screenshot (6).png">
</a>

## App Setup (localhost)

```
git clone https://github.com/John-Weeks-Dev/AliExpress-clone.git

cp .env.example .env

npm i

npx prisma generate

npm run dev
```

You'll have to setup a Supabase account & Stripe account, then add all of the details in to your .env file.

Once you've connected your application to Supabase. You'll also need to setup the Auth Providers: 
    
    [Google](https://cloud.google.com) 
    [Github](https://github.com/settings/developers)
    
    https://supabase.com/docs/guides/auth/social-login/auth-google
    https://supabase.com/docs/guides/auth/social-login/auth-github
    
Now run the command to migrate your database tables and run your seed file.
    
```
npx prisma migrate dev --name init
```

## Contributing

While this is a personal group project, we are open to collaboration. If you have suggestions for improvements, please open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<br>
