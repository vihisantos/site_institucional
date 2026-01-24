# Deploying to GitHub Pages

To deploy your site to GitHub Pages, follow these steps:

1.  **Ensure you are logged in to GitHub:**
    You need to have write access to the repository `vihisantos/site_institucional`.

2.  **Push your code to the `main` branch:**
    ```bash
    git add .
    git commit -m "Update for deployment"
    git push -u origin main
    ```

3.  **Run the deployment script:**
    ```bash
    npm run deploy
    ```
    This command will:
    *   Build the project (`npm run build`).
    *   Push the `dist` folder to a `gh-pages` branch on your repository.

4.  **Activate GitHub Pages:**
    *   Go to your repository settings on GitHub: [Settings > Pages](https://github.com/vihisantos/site_institucional/settings/pages).
    *   Ensure "Source" is set to "Deploy from a branch".
    *   Select the `gh-pages` branch (it should appear after step 3).

5.  **Access your site:**
    Your site will be live at: [https://vihisantos.github.io/site_institucional/](https://vihisantos.github.io/site_institucional/)
