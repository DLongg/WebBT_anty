import { getProjectBySlug } from "./src/lib/projects.ts";

const p = getProjectBySlug("thi-cong-xay-lap-hang-muc-chieu-sang-1");
console.log(JSON.stringify(p, null, 2));
