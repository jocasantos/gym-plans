import { Coins, Home, User } from "lucide-react"

export const navLinks = [
    {
      label: "Home",
      route: "/home",
      icon2: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ob21lIj48cGF0aCBkPSJtMyA5IDktNyA5IDd2MTFhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ6Ii8+PHBvbHlsaW5lIHBvaW50cz0iOSAyMiA5IDEyIDE1IDEyIDE1IDIyIi8+PC9zdmc+",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ob21lIj48cGF0aCBkPSJtMyA5IDktNyA5IDd2MTFhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ6Ii8+PHBvbHlsaW5lIHBvaW50cz0iOSAyMiA5IDEyIDE1IDEyIDE1IDIyIi8+PC9zdmc+",
    },
    {
        label: "Simulações",
        route: "/simulacoes",
        icon2: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zY3JvbGwtdGV4dCI+PHBhdGggZD0iTTE1IDEyaC01Ii8+PHBhdGggZD0iTTE1IDhoLTUiLz48cGF0aCBkPSJNMTkgMTdWNWEyIDIgMCAwIDAtMi0ySDQiLz48cGF0aCBkPSJNOCAyMWgxMmEyIDIgMCAwIDAgMi0ydi0xYTEgMSAwIDAgMC0xLTFIMTFhMSAxIDAgMCAwLTEgMXYxYTIgMiAwIDEgMS00IDBWNWEyIDIgMCAxIDAtNCAwdjJhMSAxIDAgMCAwIDEgMWgzIi8+PC9zdmc+",
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNjcm9sbC10ZXh0Ij48cGF0aCBkPSJNMTUgMTJoLTUiLz48cGF0aCBkPSJNMTUgOGgtNSIvPjxwYXRoIGQ9Ik0xOSAxN1Y1YTIgMiAwIDAgMC0yLTJINCIvPjxwYXRoIGQ9Ik04IDIxaDEyYTIgMiAwIDAgMCAyLTJ2LTFhMSAxIDAgMCAwLTEtMUgxMWExIDEgMCAwIDAtMSAxdjFhMiAyIDAgMSAxLTQgMFY1YTIgMiAwIDEgMC00IDB2MmExIDEgMCAwIDAgMSAxaDMiLz48L3N2Zz4=",
      },
    {
      label: "Perfil",
      route: "/perfil",
      icon2: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS11c2VyIj48cGF0aCBkPSJNMTkgMjF2LTJhNCA0IDAgMCAwLTQtNEg5YTQgNCAwIDAgMC00IDR2MiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iNyIgcj0iNCIvPjwvc3ZnPg==",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+",
    },
    {
      label: "Comprar Créditos",
      route: "/creditos",
      icon2: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb2lucyI+PGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjYiLz48cGF0aCBkPSJNMTguMDkgMTAuMzdBNiA2IDAgMSAxIDEwLjM0IDE4Ii8+PHBhdGggZD0iTTcgNmgxdjQiLz48cGF0aCBkPSJtMTYuNzEgMTMuODguNy43MS0yLjgyIDIuODIiLz48L3N2Zz4=",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvaW5zIj48Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iNiIvPjxwYXRoIGQ9Ik0xOC4wOSAxMC4zN0E2IDYgMCAxIDEgMTAuMzQgMTgiLz48cGF0aCBkPSJNNyA2aDF2NCIvPjxwYXRoIGQ9Im0xNi43MSAxMy44OC43LjcxLTIuODIgMi44MiIvPjwvc3ZnPg==",
    },
  ];

  export const pageHeader = {
    simulações: {
      title: "Simulações",
      subTitle: "Simulações realizadas anteriormente",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNjcm9sbC10ZXh0Ij48cGF0aCBkPSJNMTUgMTJoLTUiLz48cGF0aCBkPSJNMTUgOGgtNSIvPjxwYXRoIGQ9Ik0xOSAxN1Y1YTIgMiAwIDAgMC0yLTJINCIvPjxwYXRoIGQ9Ik04IDIxaDEyYTIgMiAwIDAgMCAyLTJ2LTFhMSAxIDAgMCAwLTEtMUgxMWExIDEgMCAwIDAtMSAxdjFhMiAyIDAgMSAxLTQgMFY1YTIgMiAwIDEgMC00IDB2MmExIDEgMCAwIDAgMSAxaDMiLz48L3N2Zz4=",
    },
    home: {
      title: "Queres saber quanta massa muscular podes ganhar?",
      subTitle: "Introduz os teus dados e descobre!",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNjcm9sbC10ZXh0Ij48cGF0aCBkPSJNMTUgMTJoLTUiLz48cGF0aCBkPSJNMTUgOGgtNSIvPjxwYXRoIGQ9Ik0xOSAxN1Y1YTIgMiAwIDAgMC0yLTJINCIvPjxwYXRoIGQ9Ik04IDIxaDEyYTIgMiAwIDAgMCAyLTJ2LTFhMSAxIDAgMCAwLTEtMUgxMWExIDEgMCAwIDAtMSAxdjFhMiAyIDAgMSAxLTQgMFY1YTIgMiAwIDEgMC00IDB2MmExIDEgMCAwIDAgMSAxaDMiLz48L3N2Zz4=",
    },
    homeSubmit: {
      title: "Resultado da tua análise!",
      subTitle: "Aqui estão os detalhes sobre o teu potencial de ganho de massa muscular.",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNjcm9sbC10ZXh0Ij48cGF0aCBkPSJNMTUgMTJoLTUiLz48cGF0aCBkPSJNMTUgOGgtNSIvPjxwYXRoIGQ9Ik0xOSAxN1Y1YTIgMiAwIDAgMC0yLTJINCIvPjxwYXRoIGQ9Ik04IDIxaDEyYTIgMiAwIDAgMCAyLTJ2LTFhMSAxIDAgMCAwLTEtMUgxMWExIDEgMCAwIDAtMSAxdjFhMiAyIDAgMSAxLTQgMFY1YTIgMiAwIDEgMC00IDB2MmExIDEgMCAwIDAgMSAxaDMiLz48L3N2Zz4=",
    },

  }

  interface MuscleMassTable {
    [key: number]: string;
  }

  export const muscleMassTable: { masculino: MuscleMassTable, feminino: MuscleMassTable  } = {
    masculino: {
      0: "8 Kg",
      1: "9-10 Kg",
      2: "11-12 Kg",
      3: "13-14 Kg",
      4: "15-16 Kg",
      5: "17-18 Kg",
      6: "19 Kg",
        
    },
    feminino: {
      0: "4 Kg",
      1: "5 Kg",
      2: "6-7 Kg",
      3: "8 Kg",
      4: "9-10 Kg",
      5: "11 Kg",
      6: "12 Kg",
    }
  }

  export const creditFee = -1;

  export const plans = [
    {
      _id: 1,
      name: "Grátis",
      icon: "/assets/icons/free-plan.svg",
      price: 0,
      credits: 1,
      inclusions: [
        {
          label: "1 Crédito Grátis",
          isIncluded: true,
        },
        {
          label: "Acesso Básico aos Serviços",
          isIncluded: true,
        },
        {
          label: "Suporte ao Cliente Prioritário",
          isIncluded: false,
        },
        {
          label: "Atualizações Prioritárias",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 2,
      name: "Pacote Pro",
      icon: "/assets/icons/free-plan.svg",
      price: 1,
      credits: 5,
      inclusions: [
        {
          label: "5 Créditos",
          isIncluded: true,
        },
        {
          label: "Acesso Completo aos Serviços",
          isIncluded: true,
        },
        {
          label: "Suporte ao Cliente Prioritário",
          isIncluded: false,
        },
        {
          label: "Atualizações Prioritárias",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 3,
      name: "Pacote Premium",
      icon: "/assets/icons/free-plan.svg",
      price: 2,
      credits: 20,
      inclusions: [
        {
          label: "20 Créditos",
          isIncluded: true,
        },
        {
          label: "Acesso Completo aos Serviços",
          isIncluded: true,
        },
        {
          label: "Suporte ao Cliente Prioritário",
          isIncluded: false,
        },
        {
          label: "Atualizações Prioritárias",
          isIncluded: false,
        },
      ],
    },
  ];
