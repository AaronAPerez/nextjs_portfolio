
declare module 'dotted-map/lib/map' {
  interface DottedMapOptions {
    height?: number;
    grid?: 'diagonal' | 'horizontal' | 'vertical';
    tileWidth?: number;
    tileHeight?: number;
    spacing?: number;
  }

  interface SVGOptions {
    radius?: number;
    color?: string;
    shape?: 'circle' | 'square';
    backgroundColor?: string;
  }

  class DottedMap {
    constructor(options?: DottedMapOptions);
    getSVG(options?: SVGOptions): string;
  }

  export = DottedMap;
}