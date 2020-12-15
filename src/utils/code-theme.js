const theme = {
  plain: {
    color: "#f7f1ff",
    backgroundColor: "#363537"
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "rgb(0, 0, 128)"
      }
    },
    {
      types: ["comment", "block-comment"],
      style: {
        color: "#69676c"
      }
    },
    {
      types: ["builtin", "changed", "keyword"],
      style: {
        color: "#5ad4e6"
      }
    },
    {
      types: ["number", "inserted", "constant", "boolean"],
      style: {
        color: "#948ae3"
      }
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "#5ad4e6"
      }
    },
    {
      types: ["deleted", "string", "attr-value"],
      style: {
        color: "#fce566"
      }
    },
    {
      types: ["selector"],
      style: {
        color: "#fce566"
      }
    },
    {
      // Fix tag color
      types: ["tag"],
      style: {
        color: "#fc618d"
      }
    },
    {
      // Fix tag color for HTML
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "#fdf9f3"
      }
    },
    {
      types: ["operator"],
      style: {
        color: "#fc618d"
      }
    },
    {
      // Fix punctuation color for HTML
      types: ["punctuation"],
      style: {
        color: "#fdf9f3"
      }
    },
    {
      // Fix punctuation color for HTML
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "#fdf9f3"
      }
    },
    {
      types: ["function"],
      style: {
        color: "#7bd88f"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "#5ad4e6"
      }
    },
    {
      types: ["parameter"],
      style: {
        color: "#fd9353"
      }
    },
  ]
};

export default theme;
