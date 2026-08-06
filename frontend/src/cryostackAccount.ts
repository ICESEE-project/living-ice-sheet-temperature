export function loadCryoStackAccount(): void {
  const cssId = "cryostack-shared-account-css";
  const scriptId = "cryostack-shared-account-script";

  if (!document.getElementById(cssId)) {
    const css = document.createElement("link");

    css.id = cssId;
    css.rel = "stylesheet";
    css.href = "/_static/icesee.css";

    document.head.appendChild(css);
  }

  if (document.getElementById(scriptId)) {
    return;
  }

  const script = document.createElement("script");

  script.id = scriptId;
  script.src = "/_static/cryostack_account.js";
  script.async = true;

  script.onerror = () => {
    console.error(
      "CryoStack account assets could not be loaded."
    );
  };

  document.head.appendChild(script);
}