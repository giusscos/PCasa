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
};
</script>
<stytle lang="scss" scoped>
.navigation {
  &.open {
    .nav {
      z-index: 100;

      width: 100%;
      height: 100%;
      overflow: auto;
      pointer-events: auto;

      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .lines {
      z-index: 100;
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

  .nav {
    width: 0;
    height: 0;
    overflow: hidden;
    pointer-events: none;
  }
  .lines {
    cursor: pointer;

    position: relative;
    height: 50px;
    width: 50px;

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

      background-color: #000;
      transition: 800ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
}
</stytle>