// class ScrollTimeline {
//     constructor(options) {
//       this.source = options.source || document.documentElement;
//       this.orientation = options.orientation || 'block';
//       this.startScrollOffset = options.startScrollOffset || 0;
//       this.endScrollOffset = options.endScrollOffset || 0;
//     }
  
//     get currentTime() {
//       const scrollPosition = this.orientation === 'block' 
//         ? window.scrollY 
//         : window.scrollX;
//       return (scrollPosition - this.startScrollOffset) / (this.endScrollOffset - this.startScrollOffset);
//     }
//   }
  