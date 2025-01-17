const musicList = [
  {
    id: 1,
    name: "徐俊雅《爱你",
    singer: "1.1加速版 抖音版",
    linkAu: "爱你.mp3",
    img: "./assests/img/爱你.jpg",
  },
  {
    id: 2,
    name: "Không thể độ luân hồi",
    singer: "Doãn Tích Miên",
    linkAu: "Không thể độ luân hồi.mp3",
    img: "./assests/img/Không thể độ luân hồi.jpg",
  },
  {
    id: 3,
    name: "Lao tâm khổ tứ",
    singer: "Thanh Hưng - Huy PT Remix",
    linkAu: "Lao Tâm Khổ Tứ.mp3",
    img: "./assests/img/Lao Tâm Khổ Tứ.jpg",
  },
  {
    id: 4,
    name: "Hứa đợi nhưng chẳng tới",
    singer: "LÂM TUẤN x TLEE REMIX",
    linkAu: "Hứa đợi nhưng chẳng tới.mp3",
    img: "./assests/img/Hứa đợi nhưng chẳng tới.jpg",
  },
  {
    id: 5,
    name: "Yêu em nhưng không với tới x Vở kịch của em",
    singer: "DC Tâm x SS x AM Remix",
    linkAu: "Yêu em nhưng không với tới x Vở kịch của em.mp3",
    img: "./assests/img/Yêu em nhưng không với tới x Vở kịch của em.jpg",
  },
  {
    id: 6,
    name: "Em nào có tội",
    singer: "Thương Võ - Tipo ft. Ciray Remix",
    linkAu: "Em nào có tội.mp3",
    img: "./assests/img/Em nào có tội.jpg",
  },
  {
    id: 7,
    name: "Vở kịch của em",
    singer: "Vây Giữ REMIX",
    linkAu: "Vở kịch của em.mp3",
    img: "./assests/img/Vở kịch của em.jpg",
  },
  {
    id: 8,
    name: "Yêu thương chẳng là mãi mãi",
    singer: "DC Tâm - Thazh Remix",
    linkAu: "Yêu thương chẳng là mãi mãi.mp3",
    img: "./assests/img/Yêu thương chẳng là mãi mãi.jpg",
  },
  {
    id: 9,
    name: "Anh thôi nhân nhượng",
    singer: "KIỀU CHI COVER",
    linkAu: "Anh thôi nhân nhượng.mp3",
    img: "./assests/img/Anh thôi nhân nhượng.jpg",
  },
  {
    id: 10,
    name: "Rằng em mãi ở bên",
    singer: "Bích Phương (speed up)",
    linkAu: "Rằng em mãi ở bên.mp3",
    img: "./assests/img/Rằng em mãi ở bên.jpg",
  },
  {
    id: 11,
    name: "Ngã tư không đèn",
    singer: "TRANG x KHOA VŨ",
    linkAu: "Ngã tư không đèn.mp3",
    img: "./assests/img/Ngã tư không đèn.jpg",
  },
  {
    id: 12,
    name: "Chắc vì mình chưa tốt x Vạn sự tuỳ duyên",
    singer: "Huy PT Remix",
    linkAu: "Chắc vì mình chưa tốt x Vạn sự tuỳ duyên.mp3",
    img: "./assests/img/Chắc vì mình chưa tốt x Vạn sự tuỳ duyên.jpg",
  },
  {
    id: 13,
    name: "Hắn chỉ là lướt qua",
    singer: "h3R3 - Thái Duật Blazo",
    linkAu: "Hắn chỉ là lướt qua.mp3",
    img: "./assests/img/Hắn chỉ là lướt qua.jpg",
  },
  {
    id: 14,
    name: "Tinh vệ",
    singer: "BOTHLAZER REMIX",
    linkAu: "Tinh vệ.mp3",
    img: "./assests/img/Tinh vệ.jpg",
  },
  {
    id: 15,
    name: "Soft lips",
    singer: "Blank Check Remix",
    linkAu: "Soft lips.mp3",
    img: "./assests/img/Soft lips.jpg",
  },
  {
    id: 16,
    name: "Tuyết yêu thương",
    singer: "H2K (TÙNG T REMIX)",
    linkAu: "Tuyết yêu thương.mp3",
    img: "./assests/img/Tuyết yêu thương.jpg",
  },
  {
    id: 17,
    name: "Gu",
    singer: "Freaky ft. Seachains「Cukak Remix」",
    linkAu: "Gu.mp3",
    img: "./assests/img/Gu.jpg",
  },
  {
    id: 18,
    name: "Da Key",
    singer: "GUrbane",
    linkAu: "Da Key.mp3",
    img: "./assests/img/Da Key.jpg",
  },
  {
    id: 19,
    name: "Tại vì sao",
    singer: "RPT MCK",
    linkAu: "Tại vì sao.mp3",
    img: "./assests/img/Tại vì sao.jpg",
  },
  {
    id: 20,
    name: "Cung trăng",
    singer: "Mina Young",
    linkAu: "Cung trăng.mp3",
    img: "./assests/img/Cung trăng.jpg",
  },
  {
    id: 21,
    name: "Em là hoàng hôn",
    singer: "Vang x CLoud 5",
    linkAu: "Em là hoàng hôn.mp3",
    img: "./assests/img/Em là hoàng hôn.jpg",
  },
  {
    id: 22,
    name: "Rước nàng",
    singer: "Bìn - AIR Remix",
    linkAu: "Rước nàng.mp3",
    img: "./assests/img/Rước nàng.jpg",
  },
  {
    id: 23,
    name: "探故知",
    singer: "浅影阿",
    linkAu: "探故知.mp3",
    img: "./assests/img/探故知.jpg",
  },
  {
    id: 24,
    name: "Rồi tới luôn",
    singer: "Nal",
    linkAu: "Rồi tới luôn.mp3",
    img: "./assests/img/Rồi tới luôn.jpg",
  },
];

export { musicList };
