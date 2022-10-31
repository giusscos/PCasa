<template>
  <nav class="navigation" :class="isOpen ? 'open' : ''">
    <ListNav class="nav" :routes="routes" />
    <div class="lines" @click="setOpen">
      <span class="line top"></span>
      <span class="line bot"></span>
    </div>
  </nav>
</template>
<script>
const routes = [
  {
    name: "La storia",
    route: "/la-storia",
  },
  {
    name: "Detersivi",
    route: "/detersivi",
  },
  {
    name: "Prodotti tipici",
    route: "/prodotti-tipici",
  },
  {
    name: "Artigianato locale",
    route: "/artigianato-locale",
  },
];

export default {
  name: "TheNav",
  data() {
    return {
      routes,
      isOpen: false,
    };
  },
  methods: {
    setOpen() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 641) {
        this.isOpen = false;
      }
    });
  },
};
</script>
<stytle lang="scss" scoped>
@import "~/assets/css/main.scss";

.navigation {
  &.open {
    &::after,
    &::before {
      display: block;
      content: "";

      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;

      width: 100%;
      height: 100%;

      border-bottom-left-radius: 0;
    }

    &::after {
      transition: $fast-transition 400ms;
    }
    &::before {
      transition: $fast-transition 200ms;
    }

    .nav {
      overflow: auto;
      pointer-events: auto;
    }

    .lines {
      .line {
        &.top {
          top: 50%;
          transform: rotate(135deg);
        }
        &.bot {
          top: 50%;
          transform: rotate(45deg);
        }
      }
    }
  }

  &::after,
  &::before {
    z-index: 10;
    display: block;
    content: "";

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;

    width: 0;
    height: 0;
  }
  &::after {
    border-bottom-left-radius: 300%;
    background-color: $color-seco;
    transition: $fast-transition 300ms;
  }
  &::before {
    border-bottom-left-radius: 75%;
    background-color: $color-prim-blur;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    transition: $fast-transition 600ms;
  }

  .nav {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    overflow: hidden;
    pointer-events: none;
  }

  .lines {
    z-index: 100;
    cursor: pointer;

    position: fixed;
    top: 0;
    right: $smaller-size;
    height: 50px;
    width: 50px;
    transition: $fast-transition 100ms;

    .line {
      position: absolute;
      &.top {
        top: 40%;
      }
      &.bot {
        top: 60%;
      }
      left: 0;
      transform: translateY(-50%);

      height: 3px;
      width: 40px;
      border-radius: 3px;

      background-color: $color-prim;
      transition: $fast-transition 100ms;
    }
  }
}

@media (min-width: $md) {
  .navigation {
    .lines {
      right: -100px;
    }

    .nav {
      position: relative;

      overflow: auto;
      pointer-events: auto;
    }
  }
}
</stytle>