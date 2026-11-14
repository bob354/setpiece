# SetPiece project page

Project page for *Co-Authoring with Agents: Live, Transparent Authoring of Immersive Scenes in VR and on the Desktop*.

It's a static site: preview it with `python -m http.server` in this folder, or serve it with GitHub Pages (Settings → Pages → Deploy from branch → `main` / root).

## Filling in media

Each grey dashed box (`.media-slot`) is a placeholder. The HTML comment above each one shows the `<video>`/`<img>` tag to swap in. Put files in `static/images/` and `static/videos/`.

## When the paper is public

- Replace "Anonymous Authors" with author blocks (template in an HTML comment).
- Add `href`s to the Paper / arXiv / Video buttons and remove `disabled` and the `(soon)` tag.
- Uncomment the Video section and set the YouTube ID.
- Replace the BibTeX entry.

## License

Built on the [Nerfies](https://github.com/nerfies/nerfies.github.io) template. The website is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
