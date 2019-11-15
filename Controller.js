function load(path) {
  switch (path) {
    case "home":
    case "program":
      location.href = "https://gamsoft.ga/";
      break;
    case "portfolio":
      location.href = "portfolio.html";
      break;
    default:
      alert("잘못된 접근입니다.");
      location.go(-1);
      break;
  }
}
