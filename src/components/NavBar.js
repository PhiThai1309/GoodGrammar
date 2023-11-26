import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <div className="placeholder"></div>
      <div className="navigation-container">
        <CustomLink href="/">
          <span className="material-symbols-rounded">home</span>
        </CustomLink>
        <CustomLink href="/paraphaser">
          <span className="material-symbols-rounded">format_paragraph</span>
        </CustomLink>
        <CustomLink href="/grammar">
          <span className="material-symbols-rounded">spellcheck</span>
        </CustomLink>

        <CustomLink href="/subscribe">
          <span className="material-symbols-rounded">workspace_premium</span>
        </CustomLink>
      </div>
      <div className="profile-container">
        <span className="material-symbols-rounded">help</span>
        <span className="material-symbols-rounded">account_circle</span>
      </div>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  let path = window.location.pathname;
  return (
    <a
      href={href}
      className={"nav-item" + (path === href ? " selected" : "")}
      {...props}
    >
      {children}
    </a>
  );
}
