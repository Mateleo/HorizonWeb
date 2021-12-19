<template>
  <nav
    class="flex text-0 space-x-2"
    role="navigation"
    aria-label="breadcrumb"
  >
    <div
      v-for="(breadcrumb, i) in breadcrumbs"
      :key="i"
    >
      {{ breadcrumb }}
      <div
        v-if="i === breadcrumbs.length-1"
        class="sr-only"
      >
        Page actuelle
      </div>
    </div>
  </nav>
  <!-- <nav
    class="breadcrumbs"
    aria-label="Breadcrumb"
    vocab="https://schema.org/"
    typeof="BreadcrumbList"
  >
    <ol class="breadcrumbs__directory">
      <li
        class="breadcrumbs__item"
        property="itemListElement"
        typeof="ListItem"
      >
        <a
          class="breadcrumbs__link"
          href="https://example.com/"
          property="item"
          typeof="WebPage"
        >
          <i
            class="ri-home-line"
            title="Home"
            aria-hidden="true"
          />

          <span
            class="hidden"
            property="name"
          >Home</span>
        </a>
        <meta
          property="position"
          content="1"
        >
      </li>

      <li
        class="breadcrumbs__item"
        property="itemListElement"
        typeof="ListItem"
      >
        <a
          class="breadcrumbs__link"
          href="https://example.com/articles/"
          property="item"
          typeof="WebPage"
        >
          <span property="name">Articles</span>
        </a>
        <meta
          property="position"
          content="2"
        >
      </li>

      <li
        class="breadcrumbs__item"
        property="itemListElement"
        typeof="ListItem"
      >
        <a
          class="breadcrumbs__link"
          href="https://example.com/articles/development"
          property="item"
          typeof="WebPage"
        >
          <span property="name">Development</span>
        </a>
        <meta
          property="position"
          content="3"
        >
      </li>

      <li
        class="breadcrumbs__item"
        property="itemListElement"
        typeof="ListItem"
      >
        <a
          class="breadcrumbs__link"
          property="name"
          aria-current="location"
        >Shared Vocabulary</a>
        <meta
          property="item"
          typeof="WebPage"
          content="https://example.com/articles/development/shared-vocabulary"
        >
        <meta
          property="position"
          content="4"
        >
      </li>
    </ol>
  </nav> -->
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array,
      default: () => ['Home', 'Test', 'My Article']
    }
  }
})
</script>

<style>

.o-inline-svg-icon {
  stroke: currentColor;
}
.o-inline-svg-icon--baseline {
  position: relative;
  top: 0.125em;
  width: 1em;
  height: 1em;
}

.breadcrumbs__directory {
  display: flex;
}

.breadcrumbs__link:link {
  color: #007c89;
}
.breadcrumbs__link:link:hover {
  background-image: linear-gradient(currentColor, currentColor);
  background-size: auto 1px;
  background-repeat: repeat-x;
  background-position: 0 calc(50% + 1ex);
}
@media (max-width: 800px) {
  .breadcrumbs__item:not(:nth-last-child(2)) {
    display: none;
  }
  .breadcrumbs__link:before {
    display: inline-block;
    content: '';
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23007c89' stroke-width='2' stroke-linecap='round' stroke-linejoin='round%5C'%3E%3Cline x1='19' y1='12' x2='5' y2='12'%3E%3C/line%3E%3Cpolyline points='12 19 5 12 12 5'%3E%3C/polyline%3E%3C/svg%3E") center/16px 16px no-repeat;
    width: 16px;
  }
}
@media (min-width: 801px) {
  .breadcrumbs__item:nth-last-child(n+2):after {
    display: inline-block;
    content: '';
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23767676' stroke-width='2' stroke-linecap='round' stroke-linejoin='round%5C'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E") center/16px 16px no-repeat;
    width: 16px;
    margin: 0 8px;
  }
  .breadcrumbs__link {
    display: block;
    float: left;
  }
}
</style>
