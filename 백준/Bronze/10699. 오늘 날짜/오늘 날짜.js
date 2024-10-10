const locale = new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" });
const today = new Date(locale).toISOString().split("T")[0];

console.log(today);
