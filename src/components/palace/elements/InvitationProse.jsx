export default function InvitationProse({ om, pre, title, body, hint }) {
  return (
    <div className="invitation-prose">
      {om && <span className="invitation-prose__om">ॐ</span>}
      {pre && <p className="invitation-prose__pre">{pre}</p>}
      {title && <h2 className="invitation-prose__title">{title}</h2>}
      {body && <p className="invitation-prose__body">{body}</p>}
      {hint && <p className="invitation-prose__hint">{hint}</p>}
      <div className="invitation-prose__border" aria-hidden="true" />
    </div>
  );
}
