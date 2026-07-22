import React from 'react';
import { PawPrint, Droplet } from 'lucide-react';
import { motion } from 'motion/react';

const DOGS = [
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBST1pAabwsq6veZWbTgFgYaYo4KBXuZT_c5AmasFQORgol7gVnuI5kpxqEu6K6ukSd3y0xXjSWx-IdvecKJ9Qgl1MUnuGdSXaUn9gOuHK9xO-MaxlNvbf6xrCW6gxjEjiMoD5Ra3kONJZe5x6uHwaFtSkRbT_KOBh3SOhvBBp0DzlvjTKPX3eAz4N69EgGGbkrAEN8eVYeLYqO1sC2clXSOZhNkt-MPF666F3k5NBIaEL4FCWEkTo7GvOYYGEJ7eztMfeP9mmDsqJR", label: "Puppy", name: "Golden Retriever" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxIgC9ijUv82iwX26n6OL-o_x-mkEa1BMYD_fEVpkggHtrM6ncErAxVpqALknARj7KFS5NouDLk7L1ung7ll6rNaXVU4o0mw4WWu9RtolTEMr0zcDmbZ3crWMoZGI6gq8rtkD505uuPBHPQXCf7EVt2vZB8xb4gAMEgxQlIPzvYLL23D5xy8fd53mOiCXBbnEShe0Dt8580ongefS0glTfJXuijqzHFgVZ22axkm5c6ARofLGd3oWq1_gl3fzU9tPx-eRtnzeLCLKm", label: "Transport", name: "Travel Beagles" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyvBaf9UkR4-5Qqvs8WsG30ZvcYUu_gsJlGm4yBnAh8nAzKZDVlLzujPBME2M9omfYUzxQbEJUpoLAmpgxvRH9qqzEmvkPF1ACVoZO4UROBtt22HkM74YKj1TaZJiqEKkKamxshe1Ac29dpSZ5Q9qWBuEhuXlQFRyxZEy0VZQktAHAQ-hAQj3kCc3yhoLK40Hd3wSltZI72Y2ljwSbmpKV53bkzrHEqXAn5cn1j4kt_KNDikICfzn8PkZlkQO0IBhF59WnYZfaZ8nA", label: "Adoption Center", name: "A Box of Sunshine", wide: true, icon: "PawPrint" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpET5pmLA5ptXk829Pdd9AG1xz3wfkFzMWC-22lT_M1x8h0Z1DH2V9KjOU-nUtHHfkLO3H80rjSjCuaoBM29FDj-quWgQjFOX8TUiYreSQeRhHEHGKydEISJ1XKmI8snlOzrFnaIz5KbmEqOmsk5VCTfThIBqeKVnr3tleckDc-4o2qkWWgjzJ-1Htlmfkbf9ECks5wBYAjBC_vhsvwdAzaTPRk9W4xCHtIKpaO-4uz-MOTbVzWrTadtrLjclHXLR1D2i3qYLUKqp4", label: "Social", name: "Mixed Pack" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyc9Mf9esEtLA5g4SImcUzHmluolnwpi-4rRjOOKAD7qrgHnnG8sjIXIFlBNrbWgoh8d8GCjwu9TuYfOwSmw_2L1WOH7HVqQIDZkDLpelcbGB4ASJjJYLheSOwCDN03AJnMMooGCRVjiRkJ387d3hkDLvsr9jbWDW7REmKpObvaJHQ2DaBgSirqkLnfUzq9KYTr7rGRcL-37E9irUOUQ6QlOzBMsCJeco_brdvkYW-yR7JIkreF_yaFNnGkb3Les4bSyiYqlCvGC9r", label: "Protector", name: "German Shepherd" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuATkYWeZCkP4MCbjtLN2PCMcP4hosqhz-LVFHQ1__UWm4CItflVwJsfem-LNcL7bsJk7T95PAuaNePspZlqAI9CMntN9-fBXMCJrERDzm3YPlVXfIjzHAv9NmhVAwwfYLQgn2XAHViSMt6_ZT47K20v4LgglLWjo1vDkdHNtgHYCPBiKxGlEogAH045hQuuzC6RZYIjAqqlDfuKtDDyEKLiKDGMwbQ5qbV2VHe7mWoOSzTeXhBUoIXgaUmSvTXJYJiTgLmK7fFBreW8", label: "Hound", name: "Classic Beagle" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSQewdHJJh83WVAzGVm7dH66KQ_I5xkfudEGLg7KxyKnY4Kjdh-6yW_5oNNWyc1f7VgOwQPKxs0tlFzskEn2OlGwBlengm_HhUpcDC-b4JJnwV2IRwiuJeSSOuAtAD9r-tbY_W3Jzw5q-Pw6qqjvE-H3DYbCxR6JQj6PGSd0EmOAg_bz_y00M9TxaZV5GcMl21g3OOp5-bRK0bMGRtJ9hY0rVuePyXh7Fo_14dMge-AYjAhfqUXBTU6qMFHtszWAcwKI1jnjug-Z1d", label: "Guardian", name: "Rottweiler" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzGiVVLjGTrihL94h7UYc4Ae-rCSouKOjgEEMCd-XNDhFqxCot3nBCGvX1mqiPBUhpgIPvoepw6VyMOtFDLNlIflll0s52XeEj-2EQ7vUpHO31HkKEeE0P5TgsSM_otGO6BC_Uenyvml0MdOktgmUWX7i_dy3YJGY2d0YyrxSJUcDt4Un-Rr3K4lcx4NK-i9sGVEZVIU32f3Fidp_UJeXIy6D28YRkUkxicu6YQCxwJaKn5d-MRon-guBzFDSikEuywCQFOjTVnt2-", label: "Companion", name: "Shih Tzu" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu9oyYFU-RBijMpIDLPP496iBiACsKbzOd_MxHKoHppb6dNB0IS0Vau0IYFMdZ5cEXPHnUqsmG4nMz_1ZClLsFCwP6l_I4s_Ly7wheAHUlYryr--3xBL70uMhUnwNuvbntd52L43PdrJRUrMNnpAFqYnZiC8AEme9L0aSJF2R1Vxpau3hgAuC8l2xfn8BICN2SwtoVK4CLWRLre2vOStQMSIps-ubtIMCNqnpVdSYhLg02HdLClJ0NV1vJIHFRjJFKOk49O1h_NhsK", label: "Working Class", name: "Arctic Samoyed", wide: true, badge: "In Stock" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDl-8qfzekqHPRtKCc_UGTflAVc8b0fstL8w9NRFiX8XjFGsEw19mKpRXn5-WFvCxebmmBHZqr287Wb0ADujj21FW9jbwJ7DjekBaZS-r3kqP3N1pbc63Gvlic_ikauzgC7CvxBtE8FM_9m_Fa7SmChxrUKumfHOJCSvpsPM_-gpeCV5OBUKySlapyXfRzH8btoaVHD_izAwfIqD2JOTMTGQOAKy87BjR0XvctuT5ehBDK5b4nRocnWgKXmTCnN2_tP8f8zmt9PVDTz", label: "Spotted", name: "Dalmatian" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu32TTNcdQ0jPLHkvWklqZ9rgzdDgdru3Y4UN4YjqMpWjn_TVvHEL_42hkAOH6vO9648ojK76XvNyX2XoIBkk5vqZYdicBsqcndnQv5ARu9bBf8S3XLmGhSlYBGlZZi9OSFK3FQi2KbjXpkJU0Etxe3526JQTa9PBHXyOuHQX7ktOlEuB833y6QaPcUKc1_a0ubVKU_yzF_B7Q1jtqgluEbKynFafw93KqPWjEPGl48fa8HGeKw4SZHLArcvmABPbvS8HiKxFn_IdE", label: "Pack", name: "Siberian Huskies" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2RE-wdIlbWWE4LeA0cRGTCuAQsQQ7AvTxMHl3MjuQNClUTNEZoBOMa_2GJ_lvB-NzFnVvh-PZNRwnXonZdaJ9uhjQejvN8oLrFO9qhn0wommfhvffNB58lAXUXU-1ksmAhUJvOTV59aoP659WxtiT9hIxfwDq7I_lLFlANJhn9OxYssZmgYQE1pKP2ZD3s8kgVLcCz-7xmo_AyGd3kcy3NMygLdz6REYq3Zqm1sI_BuQaD7mxKOpQXSaYH3GhG8-Ntam8CZI_SEIX", label: "Majestic", name: "Alaskan Malamute" }
];

const CATS = [
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmJ5_TDjZR_HoVw4q9AgViPyISTeTlgeUSEEdpCA09GI1uTTKigaZlAIGiWBeenrMKwZd4EOOX1tsuyS80z9v-QXnhHpDxRdyOglvrO-UDltpzy5CCVFSbbEM7UlD-Yu1QLrtXGcOeMLQHQ-pNtCVql-wKEcdV493q_Pz6W1HUncN72DTLsTVh-bYWUBKGAZtPD9T9A-dv989mbNUOzH0VuzdvsCyee2KEBoHnLj700m-6vgoMFAZNPcgLNafUOmLQr_dRazvF7hiS", label: "Playful", name: "Tabby Shorthair" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcy7oFaI_tPxHi-bw9kL2O6pQXa21f8Gn1ZTcqsfoLFqZHO29cwIYaCM2C2w0hdB1mlEcL1f11VCivmWEfGSGuoqGGOa0hyDMMAgg52Zf6bGfOpIruvd9Tyg2GmDU-LuCf2x-DslzGgCa_3ly9SmWSeDgYgkPcZN9QSR0bZPbKUtJQloFuAu_ks85PQRvyTS7Mgq5lW72ij7hFChufO1P9nAV8OGArixobVJNIAPjhxrQRvC6ciJo6aF4ddAUWpGwWPSDLXFdMK2nb", label: "Curious", name: "Grey Kitten" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9MkhG3jhMBR3-MAogfUjr4NRxWVNlot1BEnrbeuWiW4hwmtbnFAl5sRIJWfyQS9F7rlu1z3vmgHEfvloauP8-Amc0iQ_TafIkPZdy2aorW8Eo4tZYuT9C4GQjOpaImWQbt5gGg-BUjkYhxzGLP8FaI3yOFS4JYAwdEK_6YZo40BV9wn-oltIWkwkVGQMaP1Dwx0TXTxwMNoJQpZQ6A051D_F_tsAUwZXl3CLSO5v4wiV5SEduqIGKURWPGk1bGG6PUwTGA10CTm8m", label: "Calm", name: "Ginger Tabby", wide: true, icon: "PawPrint" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgp73IAgJJ9Yn2PdhrNsz_krrXjql1YSW4OzBgOBWPjr5_JNq-vduyLBnDsBqEH92zO-qmsvLlps3TMHaRGIswHoMRWDTmKg5wFMSOUMzv2E4GEYR7XjsqL_np7uP2q2LXUUvv2uXU3RDEnLY_V1aXcWHXfnBzRtPl9gifCUi11wc-lGnEhvcTTp2oLH5jif4z84zptipvjIlyur3PV796oeNwDmo1EwikaWYLjyPQBaKkzobz-MQclfY4kleJEiUJJop9MDU0ndh9", label: "Fluffy", name: "Turkish Angora" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGSEKf29YfyRWArqmgmV9F0k4Rxax8xykaYg_L5mClVKfqZVxhqxft7u8OjdWGpC6hyqtxgRkKYUSDZXdbr0lUttPrA2cMwjBj3EtL7AhDFfv9sjpsXP94WX1jgAqgE5vY-2NTUEyMcWLTVCrqVFL4YYkrUAFpCLUulv1JJUQor7qGkRYT_jAnYEW8XWYfzZKFobc79xPdIJR2rRnEPPvZQn9btjN5WrGXpZtTJzGM1VJLuDwzxgaoTleeBb2Cfj3euEqxqF3OG95t", label: "Elegant", name: "Calico Mix" }
];

const BIRDS = [
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7X6yK_XNcg4JdlQHwuz_gFea1-sv0RaCjSC2JPcklPPPIZX2EqYwgnhYCmIBsF_Y98bSbf33IY9YECl9vTOr24meR0EnUhScaJWupwA13LUEs3JEaxy7cnOwpWmqGTe6d71sAY-NYpHDQKYqhJecL2dk2_CIf9fJyD3BeTW6G1DJf6INGoAV8ajc0zEyeX3MIhYuJ5gkcsZD_7R_lvbgTa0dx1IQ6ljrynHd5s3nxFX1mE-77zCjjlxN7cWQ9NHujCeOJkX2Dk7ow", label: "Canary", name: "Lemon Zest" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNpz9HUKnweDoPaL654vWEOINT3Pn5V_Bo76dUFZYbFu9rLU_lOZeERhAflecxLoh9vv5xV3orY8_6MtwPbCmJJow9JJhyicUmDnpLVEHLDTAhYgOpzTwjRbc6egXGwz-W6wbNDMiPRZKOgEyBO7OJaaXYY6_G7l5Rt768A0dEa6fZ4Vx5xlPZkqIh3iiWHBEPCX5Ig1YWFINWBg2UAQAd2D4sDOsTWilUDooG2z1fI-W6z3BHFPM-PxlcMGN3sRnHo2888NrGSyRr", label: "Sun Conure", name: "Solar Flare" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOA4St6rXyhjYRuvqlRrHhO48p8rqBhvI-HTvec2syKRFrkCpSjhn2pf1igJSgqD5qKVsvjijp_Z5hWQY2JbzBr527wgdUlCP9QsTIclwJpJv3n_QFdSARv-Mum-TYMJnytVN0Kjyt9xyRvVoXN-yo30jHJrMT-YXO4SMPOi-T63jYBrNzchNM5x7l-YXc94UUB2kaqkl8ya5UWwBrfX9ECGebe4_Fpmh2W_mYL80iqXDTyL2j317SIqaZGM5xbZH2EyGb5GgBk_a4", label: "Budgerigar", name: "Sky & Meadow", wide: true, icon: "PawPrint" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBET4h9u2KCVS8U3mVxDXW2GEDE_8ui2UzfjzQxypjkf8gNWr6fBQDIjJS2JmOrNOCF_Wws3E3mRumTOvqky_H8SnTJ9JyL7MsszmKNFzLXpZBw2LBYd0hOo3tUEDF6kdqp5Ninp38FSprIz7Cf-ldXDzbQ39z1yJI8cLyhlpTiYxBy2EVleE8DJqsuAcKQRNiC-EA8UdBcg18gAsQGIE_qlVvScOApGrw9eYGT1UN4D0ubbzPWQPwXM-OtxzUkSn22xlj8c0GGV7zJ", label: "Budgerigar", name: "Cloud Dancer" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGHzHC3qTg9lspeEkpZaSnatAXPA1uFYIZFv7HIREBKyyOTCKOP8QbC0TjHXMRiFsUKVZo_ZaobQKvNDPeTPeRZ6Q2BWfN_HxgmHxUYTPO6VZXR8tQAOhMAVhIvMfVm-BEfeKx79oILgKh2tAOhfpMLZeChAbmdJ3_n1rBlwiFM4ox5fUrDcGH44tXfll_cqleJy6IXIGNUqDtmqsperRQlXMOZgap0q_Si4cb5i5pc-xLiMNQeheI7U269xb1g7cXbx5NJFV-K6EV", label: "Cockatiel", name: "Crested Prince" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2J8xDzARqf-k1q1eQHw8ahkVwImBYIfVrXJVW54fY43kkKC6qsgSlBZcn9ivx56xpbhvseI8hHY8dxptVgwPORkiIpI77MPegNHbQN-7o1UaYnBJ7C6Oo1zQJanHkpGwDbmJs87JcQeZ74USpjnXSmU4UlpMgPte3a_WdbPS41yUqB5SsFGPsoTNrtuMoRhiKhjLkHTPDzDjyQmjrQdtaUmuFRGoz2xaM1cK8KiC7ABmbiaIkQ9peNCaZNfx0umSCzsmhr6Zu1cJh", label: "Budgerigar", name: "Azure Duo" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcvW78Qs5MWO--E-O3URNInfTn4uHNv9sddNX28Ab7DNMlrLSZeEZHwzJ22y7HH6sm2OAqZyBBdDjEuJXybUX5mdugTZCVhygtlbcvLRKrD-2xt2Qkya1QdS8VgLKO6BJrsjPJyMh4Nf6J5Qn1ZWFtb2aTrwBkRtOduazXagHlC_WU24oXSITDy7JBx6HPKpug_vjiaR-XlN48kwrvc2v6cXIgpnJjnKNElqiFdnyCo-5AW2qLNTjMD_YHYsWqevu9GgFUbmwGR8j7", label: "Lovebird", name: "Pastel Pair" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUSHX0Q1_mEA7xB2CreebYsxQtTMWj9K_fsMfv8sOKco7P70vzhfO0Ampe7JoVX1ZO8E46xcZKKIu5SSonHGPhHc5DYOhdEdG4LzQoUKeNqTbxCKLitppv3iZFKXI9JbTIY-AYYl19fw8TzBPMOGnBwe87zbinSYrWK9WjXIOW_CCtzFJPU41UgLIDc8JRv1LQDdbr2_7Y3Fm31x5Gh3la3dE-NlKYqtlJSiP4w7X7UhbZWxshySCLZG_S6Ut2Y9KpaPCW_hCurxrQ", label: "Cockatiel", name: "Garden Guardian", wide: true, badge: "Rare Find" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUtxN_3Ej4nQMS-20RSIFpJpTwuKwMGcsYMS-hqmqth2Ga6nEt2BDhld8RZdFnQbb4sd2DLCiw_arHTbTM87_loREjOcezuCs0QS2MHYYJIilbjn7Jiqfwp9QSk281_1-hii8-0bfh_GcXQE5DX06_M2Cw8XeQj28PDszfixwXt46kLXXPn8mRTgV6uuzNNlEqM6OkfWGpu3TlpoCPHfraEKGoiDjtTMk_wpwW6aaGPocHE0cpgPpClCfey1fa4X3-Kc-h0haY2WfC", label: "Lovebird", name: "Blue Velvet" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeoMw1SGDnb7xFBCKiRsLeRaEwwKr4lquYlMOow6vRe8BIXzV19AFiI2KIXSYq3h8w4TadQNR-z53mqFjdCHLA18b0fdMw2Bpt8wDt5BG9wvI61OQg5F6IC-8pIu_3g4ZI5LetlkRh0c3Kj77aTunJ7PQ0C3lT_oWaQI9s9qVPm6QRka8z9R8HMAPewIi61BpiDyBes_L_VT0YPxU6WlwQEVSsuKfaqw89n4hy5KSR3n1Csj4sIs2BzUoCbPzTjqXsjanKzDhFWkVO", label: "Budgerigar", name: "Cage Companions" }
];

const FISH = [
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWKnfX3jSwQHTBE2CIxVaiPdx8C8n9gy1htEWBxqUMMjZmOU2VjJoQImy0t4CP4qap-hFZ9FKT_vzHNHivYA05vgYjxhGz-HEs9rxeN376qG_4nGpt5_afWA_LPHoVRtjopOOh7IgAnBiF6ycc7bOk-VVAr91GG9_H5mIZojpY3us-2K8_5gaIJJkSivu_1iADzCz82cF3drgaVvFxXETG4D02dJr8ukTQ-5FleZvtRPiWZQOwJBNvIZfPZu7dfoDs1ID7NqCB8vrD", label: "Tropical", name: "Moorish Idol" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBft2yjC6OispDLtRaM02S_suuLuoihdR8R2bssPhtmEvNSpXazTUE6j_uk-yAXcZ1XlHxEJfDdGOFifeb0cjbJrMkQsXLWrj0RL0G47uZ_p2kL2yYsUcw48O6ko049XSNnzAbi02RPO1jKAc3DqmVGjcHQ3vUqhzUPPM5nW8ff9lTI55pvP-BaQoYQbTJkOMqC6p9uks_KwwUDGJZ8KlUFkqgQrLjo2dewXHd2Wms5KRDlBvlKoxx1buax_uoT2HXqSLM6Hfolnph6", label: "Exotic", name: "Striped Reef Dweller" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGbgiFznTLbC1tsei8cU9VyE_Xn_KVR5qPUtMdmsC1VX0p_q0fCHHezsNevXFJOpeT7m0ylCgM3NR4D0e61qZTGwm-qEuSv_TDz95BFB2fRJ1FINToUvaq_g7Ek92AF8vEjdHqUGOnIeetyAj0gAG8Z7FWwBOrf2iIhzvwdYnHr30uYWFjG9tCkTOFI8dZ5HaOfFckw1uFh6C1jQOcsscYmriJy-jHJ1hRRlFT3HfjLODu6hj-L3ywblD7wn2BqE8aRFErpv4defzR", label: "Tropical", name: "Blue Stripe Angelfish", wide: true, icon: "Droplet" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZuzPOthupqNGCHuTpQ7pvKJiaT2v7E5-5OqECZk-avB7PSDAmXYRArZTzpaW1nYzSNfmFoHuHR7f5hAiTGoriIIuK3V9uHiiq_agmmAFNh-zr1zu9JGoOrQyIdhzCW8xORRMtaAOEjk7xKPQeokCOL7Ka-_FvDMIlIqiu5zArVG6Xt1UGPXsm_T-k25OFN316MgmHXP0HS4Mrpd5zAN-rDT-3kgl07BZsgk5lp6Au134Tp_o1icRv9NJSNTfTHu2OtBRZHJ-fqHvS", label: "Freshwater", name: "Crown Tail Betta" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqD_0hPIM-NnBhV2GnBLUbK-qXxrrdlLnAbvDSSxggdHrIw53khmc1DPfH-XhmnN7lS2ZWEvXmvjgKAZyWCUWmmoqTGcedyys2AB4GpFs9Lvj_z8si572b_-J3xJ-174Tn1SDo85ETicAFX-WijVYjkfway_6NtcjZWkVT1fxcdM4NKkj6AX9XcHpWg8vg4RcIvUbT3eZIUVahjUAb9Qc-b1hy67dyEeE_BnNqXC-N77lZr_vTKcin-w-cT0Yk4IMIj_TpC59yJ6j6", label: "Exotic", name: "Golden Damselfish" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM4b1ijoQRv_HwKwBH8tVlekKdbYfBV-o2gPrKrT6XnAsa-CYrN2Y0PDRccw0M-pZZHUUIIyd6UGVJUP2W8JLTalsFRWy0bBdSGqbfxUiVkkxWlJIcMZvc8NqTFtesFDA673qZI6-b0TLDgMp0HlEe9yLv-ItWchjIWqZlyWvYvYHYGMm8x7avSfQ1iPFmr9onbExxpibYdB2uhTT8kexLCLvYji2Tewv7YpRAus4qMzQusN07c-zfME08Pqpj-6zCjfRnoUG2gGXh", label: "Freshwater", name: "Azure Butterfly Koi" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRy8sNiLEmEhJl0-M22cIoqoAd763k1H9zNA69IFLEw97_656dq2xzFPMu186geEpIeYVgnd1eGgfBB6d3zH9vpuV_3W0M8UXPIiyfKYe44LQZHwUH6of_8jxiHqPmKM-ZhO94zG1VSWdIrX5_QCbT0pc8wffNKeDhXk0R1YwD55F-U0fe0BvpVrjDqfJO27PtMnqke3vsx6KHJIWtG1flRkP-uRwcXZsh1C_Nu8UMt1AieN4WteedUqzEVjI4JglsVNiaVbei19dv", label: "Freshwater", name: "Royal Fantail Goldfish" }
];

function GalleryCard({ item, index = 0 }: { item: any; index?: number; key?: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: (index % 4) * 0.1 }}
      className={`gallery-card bg-white rounded-3xl overflow-hidden group border border-[#1a3d1a]/5 ${item.wide ? 'lg:col-span-2' : ''}`}
    >
      <div className={`${item.wide ? 'aspect-[16/9]' : 'aspect-[4/5]'} overflow-hidden bg-gray-50`}>
        <motion.img 
          initial={{ opacity: 0, scale: 1.15 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: (index % 4) * 0.1 }}
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          src={item.img} 
        />
      </div>
      <div className={`p-6 ${item.wide ? 'flex justify-between items-center' : 'text-center'}`}>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#E86A10] mb-1.5 block">{item.label}</span>
          <h3 className="font-serif-display text-2xl text-[#1a3d1a]">{item.name}</h3>
        </div>
        {item.icon === "PawPrint" && (
          <PawPrint className="text-[#E86A10] w-8 h-8" />
        )}
        {item.icon === "Droplet" && (
          <Droplet className="text-[#E86A10] w-8 h-8" />
        )}
        {item.badge && (
          <div className="bg-[#EFFDF0] px-4 py-1.5 rounded-full text-[#1a3d1a] font-bold text-sm">
            {item.badge}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function AnimalGallery() {
  return (
    <div className="w-full py-20 bg-white/30 border-y border-[#1a3d1a]/5">
      
      {/* Dog Gallery */}
      <section className="px-6 lg:px-12 pb-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif-display text-[#1a3d1a]">Our Furry Friends</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover a curated collection of our most beloved companions, from playful puppies to noble guard dogs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DOGS.map((dog, idx) => (
            <GalleryCard key={idx} item={dog} index={idx} />
          ))}
        </div>
      </section>

      {/* Cat Gallery */}
      <section className="px-6 lg:px-12 pb-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif-display text-[#1a3d1a]">Our Feline Friends</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our collection of elegant and playful cats, from fluffy companions to calm house cats.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATS.map((cat, idx) => (
            <GalleryCard key={idx} item={cat} index={idx} />
          ))}
        </div>
      </section>

      {/* Avian Gallery */}
      <section className="px-6 lg:px-12 pb-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif-display text-[#1a3d1a]">Our Avian Friends</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our vibrant collection of feathered companions, from singing canaries to intelligent parrots.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {BIRDS.map((bird, idx) => (
            <GalleryCard key={idx} item={bird} index={idx} />
          ))}
        </div>
      </section>

      {/* Aquatic Gallery */}
      <section className="px-6 lg:px-12 pb-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif-display text-[#1a3d1a]">Our Aquatic Friends</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Immerse yourself in our world of stunning aquatic life, from vibrant reef dwellers to serene freshwater beauties.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FISH.map((fish, idx) => (
            <GalleryCard key={idx} item={fish} index={idx} />
          ))}
        </div>
      </section>

    </div>
  );
}
