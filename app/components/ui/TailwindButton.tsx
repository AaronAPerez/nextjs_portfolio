
// export function TailwindcssButtons() {
//     const copy = (button: any) => {
//       if (button.code) {
//         copyToClipboard(button.code);
//         return;
//       }
//       let buttonString = reactElementToJSXString(button.component);
  
//       if (buttonString) {
//         const textToCopy = buttonString;
//         copyToClipboard(textToCopy);
//       }
//     };
  
//     const copyToClipboard = (text: string) => {
//       navigator.clipboard
//         .writeText(text)
//         .then(() => {
//           console.log("Text copied to clipboard:", text);
//           toast.success("Copied to clipboard");
//         })
//         .catch((err) => {
//           console.error("Error copying text to clipboard:", err);
//           toast.error("Error copying to clipboard");
//         });
//     };
//     return (
//       <div className="pb-40 px-4 w-full">
//         <Toaster position="top-center" />
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  max-w-7xl mx-auto gap-10">
//           {buttons.map((button, idx) => (
//             <ButtonsCard key={idx} onClick={() => copy(button)}>
//               {button.component}
//             </ButtonsCard>
//           ))}
//         </div>
//       </div>
//     );
//   }