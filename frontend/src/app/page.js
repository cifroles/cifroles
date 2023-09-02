'use client';
import Image from 'next/image'

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/app/page.js</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore the Next.js 13 playground.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }


// export default function Home() {
//   return (
//     <div class="p-10 max-w-7xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
//       {/* <div class="shrink-0"> */}
//       {/* <table class="mx-auto table-fixed border-collapse border border-slate-400 ..."> */}
//       <table class="min-w-full mx-auto table-auto border text-left text-sm font-light">  
//         {/* <thead class="text-center"> */}
//         <thead class="border font-medium dark:border-neutral-500 text-center">
//           <tr class="border dark:border-neutral-500">
//             <th class="border dark:border-neutral-500">Ступень <br/>толщины, см</th>
//             <th class="border dark:border-neutral-500">Число деревьев по породам, шт.
//               <th class="border dark:border-neutral-500">порода 1
//                 <th class="border dark:border-neutral-500">деловых</th>
//                 <th class="border dark:border-neutral-500">полудел.</th>
//                 <th class="border dark:border-neutral-500">дровяных</th>
//               </th>
//               <th class="border dark:border-neutral-500">порода 2
//                 <th class="border dark:border-neutral-500">деловых</th>
//                 <th class="border dark:border-neutral-500">полудел.</th>
//                 <th class="border dark:border-neutral-500">дровяных</th>
//               </th>
//             </th>
//             <th class="border dark:border-neutral-500">Число единичных и групповых семенных деревьев (семенников) по породам
//               <th class="border dark:border-neutral-500">порода 1</th>
//               <th class="border dark:border-neutral-500">порода 2</th>
//             </th>
//             <th class="border dark:border-neutral-500">Модельные деревья для определения разряда высот
//               <th class="border dark:border-neutral-500">порода</th>
//               <th class="border dark:border-neutral-500">диаметр с округл. до 1 см</th>
//               <th class="border dark:border-neutral-500">высота с округл. до 0,5 м</th>
//               <th class="border dark:border-neutral-500">разряд высот</th>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td><input type='text' defaultValue='1'/>
//               <td><input type='text' defaultValue='2'/></td>
//               <td><input type='text' defaultValue='3'/></td>
//             </td>
//           </tr>
//           <tr>
//             <td>8</td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//           </tr>
//           <tr>
//             <td>10</td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//           </tr>
//           <tr>
//             <td>12</td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//           </tr>
//           <tr>
//             <td>14</td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//           </tr>
//           <tr>
//             <td>16</td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//           </tr>
//           <tr>
//             <td>18</td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//           </tr>
//           <tr>
//             <td>20</td>
//             <td><input type='text' defaultValue=''/></td>
//             <td><input type='text' defaultValue=''/></td>
//           </tr>
//           <tr>
//             <td>22</td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//           </tr>
//           <tr>
//             <td>24</td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//           </tr>
//           <tr>
//             <td>26</td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//           </tr>
//           <tr>
//             <td>28</td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//           </tr>
//           <tr>
//             <td>30</td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//           </tr>
//           <tr>
//             <td>32</td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//             <td><input type='text' defaultValue='Введите значение'/></td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   )
// }
function tableToJson(table) { 
  var data = [];
  // let table = document.getElementById("myTable");
  for (var i = 1; i < table.rows.length; i++) { 
      var tableRow = table.rows[i]; 
      var rowData = []; 
      for (var j = 0; j < tableRow.cells.length; j++) { 
          rowData.push(tableRow.cells[j].innerHTML);
      } 
      data.push(rowData); 
  } 
  return data; 
}

function onConvertClick() {
  var myRows = [];
  var $headers = $("th");
  var $rows = $("tbody tr").each(function(index) {
    $cells = $(this).find("td");
    myRows[index] = {};
    $cells.each(function(cellIndex) {
      myRows[index][$($headers[cellIndex]).html()] = $(this).html();
    });    
  });
  // Let's put this in the object like you want and convert to JSON (Note: jQuery will also do this for you on the Ajax request)
  var myObj = {};
  myObj.myrows = myRows;
  alert(JSON.stringify(myObj));
}

const thicknesses = [
  1, 8, 
  10, 12, 14, 16, 18, 
  20, 22, 24, 26, 28,
  30, 32, 34, 36, 38,
  40, 42, 44, 46, 48,
  50, 52, 54, 56, 58,
  60, 62, 64
]

export default function Home() {
  return (
    <div class="flex flex-col p-10 max-w-1xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div class="flex flex-col p-10 max-w-1xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      {/* <div class="shrink-0"> */}
      {/* <table class="mx-auto table-fixed border-collapse border border-slate-400 ..."> */}
        <table id='myTable' class="min-w-full mx-auto table-auto border text-left text-sm font-light">  
          <thead>
            <tr class="text-center">
              <th class="border dark:border-neutral-500" rowSpan={3}>Ступень <br/>толщины, см</th>
              <th class="border dark:border-neutral-500" colSpan={6}>Число деревьев по породам, шт.</th>
              <th class="border dark:border-neutral-500" colSpan={2}>Число единичных и групповых семенных деревьев (семенников) по породам</th>
              <th class="border dark:border-neutral-500" colSpan={4}>Модельные деревья для определения разряда высот</th>
            </tr>

            <tr class="text-center">
              <th class="border dark:border-neutral-500" colSpan={3}>порода 1</th>
              <th class="border dark:border-neutral-500" colSpan={3}>порода 2</th>   
              <th class="border dark:border-neutral-500" rowSpan={2}>порода 1</th>
              <th class="border dark:border-neutral-500" rowSpan={2}>порода 2</th> 
              <th class="border dark:border-neutral-500" rowSpan={2}>порода</th>
              <th class="border dark:border-neutral-500" rowSpan={2}>диаметр с округл. до 1 см</th> 
              <th class="border dark:border-neutral-500" rowSpan={2}>высота с округл. до 0,5 м</th>
              <th class="border dark:border-neutral-500" rowSpan={2}>разряд высот</th> 
            </tr>
            <tr class="text-center">
              <th class="border dark:border-neutral-500">деловых</th>
              <th class="border dark:border-neutral-500">полудел.</th> 
              <th class="border dark:border-neutral-500">дровяных</th>
              <th class="border dark:border-neutral-500">деловых</th>
              <th class="border dark:border-neutral-500">полудел.</th> 
              <th class="border dark:border-neutral-500">дровяных</th>
            </tr>
          </thead>
          <tbody>
            {/* Цикл по значениям первого столбца */}
            {thicknesses.map(thickness => (
              <tr class="text-center border dark:border-neutral-400">
              <td class="border dark:border-neutral-400">{thickness}</td>
              <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
              <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
              <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
              <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
              <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
              <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
              <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
              <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
              <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
              <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
              <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
              <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
            </tr>
            ))}
          </tbody>
        </table>
        </div>
        <br/>
        <div>
        <button type="button" class="align-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Конвертировать
        </button>
        </div>
      </div>
  )
}


{/* <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">1</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">8</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">10</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">12</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">14</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">16</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">18</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">20</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">22</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">24</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">26</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">28</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">30</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">32</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">34</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">36</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">38</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">40</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">42</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">44</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">46</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">48</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">50</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">52</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">54</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">56</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">58</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">60</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">62</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr>
  <tr class="text-center border dark:border-neutral-400" >
    <td class="border dark:border-neutral-400">64</td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={15}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={7}></input></td>
    <td class="border dark:border-neutral-400"><input type='text' size={3}></input></td>
  </tr> */} 