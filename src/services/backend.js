// class Backend {
//     current = "";
//     countMap = {};
//     connect(name) {
//         if (this.current) {
//             console.warn("Already connected to ", this.current);
//         }
//         this.current = name
//         console.log("Connected to ", name);
//         const prevCount = this.countMap[this.current] || 0;
//         return new Promise(resolve => resolve(prevCount));
//     }

//     disconnect(name) {
//         if (this.current === name) {
//             console.log("Disconnecting from ", name);
//         } else {
//             console.error("Mismatch during disconnection! Disconnecting ", this.current, " instead of ", name);
//         }
//         this.current = "";
//     }

//     updateMap(count) {
//         this.countMap[this.current] = count;
//         console.log("updated map ", this.countMap);
//     }
// }

// const backend = new Backend();

// export default backend;