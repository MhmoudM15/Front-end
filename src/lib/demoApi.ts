import type { PublicTeacherProfile } from "../types/api";

/** Preview fixtures only; these are not real teachers or server records. */
const teachers: PublicTeacherProfile[] = [
  { slug: "ahmed", name: "مساحة أحمد — تجريبية", teacher_name: "أحمد علي", logo: null, headline: "الرياضيات والجبر خطوة بخطوة", bio: "ملف تجريبي لاستعراض تجربة اختيار المعلّم.", about: null, courses: [] },
  { slug: "sara", name: "مساحة سارة — تجريبية", teacher_name: "سارة محمد", logo: null, headline: "التصميم وبناء المهارات الإبداعية", bio: "ملف تجريبي لاستعراض تجربة اختيار المعلّم.", about: null, courses: [] },
  { slug: "omar", name: "مساحة عمر — تجريبية", teacher_name: "عمر حسن", logo: null, headline: "البرمجة وتطوير البرمجيات للمبتدئين", bio: "ملف تجريبي لاستعراض تجربة اختيار المعلّم.", about: null, courses: [] },
  { slug: "nour", name: "مساحة نور — تجريبية", teacher_name: "نور محمود", logo: null, headline: "اللغة الإنجليزية ومهارات المحادثة", bio: "ملف تجريبي لاستعراض تجربة اختيار المعلّم.", about: null, courses: [] },
];

export function demoRequest(path: string, method: string): { status: number; body: unknown } {
  const url = new URL(path, "https://preview.invalid");
  if (method !== "GET") {
    return { status: 503, body: { detail: "هذه معاينة محلية فقط. التسجيل وتسجيل الدخول والدفع تتطلب ربط الخادم الحقيقي." } };
  }
  if (url.pathname === "/public/teachers/") {
    const search = (url.searchParams.get("search") ?? "").trim();
    const matches = teachers.filter((teacher) =>
      `${teacher.name} ${teacher.teacher_name} ${teacher.headline}`.includes(search),
    );
    const page = Math.max(1, Number(url.searchParams.get("page")) || 1);
    return { status: 200, body: { count: matches.length, next: null, previous: null, results: page === 1 ? matches : [] } };
  }
  const match = url.pathname.match(/^\/(?:public\/teachers\/([^/]+)|workspaces\/([^/]+)\/(branding|public-profile))\/$/);
  const teacher = match && teachers.find((entry) => entry.slug === decodeURIComponent(match[1] ?? match[2]));
  if (teacher) {
    return { status: 200, body: match?.[3] === "branding" ? { ...teacher, status: "active" } : teacher };
  }
  if (url.pathname.endsWith("/auth/me/")) {
    return { status: 401, body: { detail: "لم يتم تسجيل الدخول." } };
  }
  return { status: 404, body: { detail: "هذه البيانات غير متاحة في المعاينة المحلية." } };
}
