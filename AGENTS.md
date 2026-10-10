<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the holding website frontend-only, with in-page navigation and client-side role previews; the operational interpreting app is a separate future release.
- Keep visual styles and semantic palette in the global design system so page sections share consistent styling.
- Keep localized page content in a typed translation module and select language through validated URL search state; this preserves frontend-only operation and makes language links shareable.
