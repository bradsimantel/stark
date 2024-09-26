import { html } from "../lib/preact-bundle.js";
import TagIcon from "./icons/tag.js";
import PaperclipIcon from "./icons/paperclip.js";
import CommentIcon from "./icons/comment.js";

export default function Card({
  category = "",
  title = "",
  assignee = "",
  tags = [],
  comments = [],
  attachments = [],
}) {
  const initials = assignee
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return html`
    <div className="card border cursor-pointer rounded p-2 m-3 bg-white">
      <div>
        <small>${category.toUpperCase()}</small>
      </div>
      <div className="my-2">${title}</div>
      <div className="flex align-items-center">
        <div className="circle me-2 bg-black"><small>${initials}</small></div>
        <div className="flex align-items-center me-2">
          <${TagIcon} height="18" />
          <span>1</span>
        </div>
        <div className="flex align-items-center">
          <${PaperclipIcon} height="18" />
          <span>1</span>
        </div>
      </div>
    </div>
  `;
}
