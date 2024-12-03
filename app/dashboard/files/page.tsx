import { FileBrowser } from "../_components/file-browser";
import { OrganizationSwitcher } from "@clerk/nextjs"

export default function FilesPage() {
  return (
    <div>
      <FileBrowser title="Tất cả tệp tin" />
    </div>
  );
}