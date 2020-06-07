import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      blueColor: string;
      greenColor: string;
      greyColor: string;
      yellowColor: string;
    };
  }
}
