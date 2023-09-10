'use client';
import React, { forwardRef, useRef } from 'react';


export default function Home() {

  const ref = useRef(null);
  const thicknessStep = ['1', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34',
    '36', '38', '40', '42', '44', '46', '48', '50', '52', '54', '56', '58', '60', '62', '64']

  const handleButtonClick = () => {
    const table = ref.current;
    const rows = table.getElementsByTagName('tr');
    let values = {};

    for (let i = 0; i < rows.length - 3; i++) {
      const cells = rows[i + 3].getElementsByTagName('td');
      let rowValues = {};

      for (let j = 1; j < cells.length; j++) {
        const input = cells[j].getElementsByTagName('input')[0];
        if (input) {
          rowValues[`cell${j}`] = input.value;
        } else {
          rowValues[`cell${j}`] = cells[j].innerText;
        }
      }
      values[thicknessStep[i]] = rowValues;
    }

    const jsonValues = JSON.stringify(values);
    // console.log(jsonValues);
    // console.log(jsonValues.length);

    fetch('http://localhost:8000/tree-count/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonValues,
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // TODO: build new table with response data
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  };

  return (
    <div className="flex flex-col p-10 max-w-7xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="overflow-x-auto flex flex-col p-10 max-w-6xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <Table ref={ref} thicknessStep={thicknessStep}/>
      </div>
      <br />
      <div>
        <button type="button" onClick={handleButtonClick} className="align-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Конвертировать
        </button>
      </div>
    </div>
  )
}

const Table = forwardRef(function Table(props, ref) {
  // const thicknessStep = ['1', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34',
    // '36', '38', '40', '42', '44', '46', '48', '50', '52', '54', '56', '58', '60', '62', '64'];
  const thicknessStep = props.thicknessStep;
  return (
    <table id='myTable' ref={ref} className="w-full mx-auto table-auto overflow-scroll border text-xs font-light">
      <thead className='text-xs'>
        <tr className="text-center text-xs">
          <th className="border dark:border-neutral-500 text-xs" rowSpan={3}>Ступень <br />толщины, см</th>
          <th className="border dark:border-neutral-500 text-xs" colSpan={6}>Число деревьев по породам, шт.</th>
          <th className="border dark:border-neutral-500 text-xs" colSpan={2}>Число единичных и групповых семенных деревьев (семенников) по породам</th>
          <th className="border dark:border-neutral-500 text-xs" colSpan={4}>Модельные деревья для определения разряда высот</th>
        </tr>

        <tr className="text-center">
          <th className="border dark:border-neutral-500 text-xs" colSpan={3}>порода 1</th>
          <th className="border dark:border-neutral-500 text-xs" colSpan={3}>порода 2</th>
          <th className="border dark:border-neutral-500 text-xs" rowSpan={2}>порода 1</th>
          <th className="border dark:border-neutral-500 text-xs" rowSpan={2}>порода 2</th>
          <th className="border dark:border-neutral-500 text-xs" rowSpan={2}>порода</th>
          <th className="border dark:border-neutral-500 text-xs" rowSpan={2}>диаметр с округл. до 1 см</th>
          <th className="border dark:border-neutral-500 text-xs" rowSpan={2}>высота с округл. до 0,5 м</th>
          <th className="border dark:border-neutral-500 text-xs" rowSpan={2}>разряд высот</th>
        </tr>
        <tr className="text-center">
          <th className="border dark:border-neutral-500 text-xs">деловых</th>
          <th className="border dark:border-neutral-500 text-xs">полудел.</th>
          <th className="border dark:border-neutral-500 text-xs">дровяных</th>
          <th className="border dark:border-neutral-500 text-xs">деловых</th>
          <th className="border dark:border-neutral-500 text-xs">полудел.</th>
          <th className="border dark:border-neutral-500 text-xs">дровяных</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {/* Цикл по значениям первого столбца */}
        {thicknessStep.map(thickness => (
          <tr className="text-center border dark:border-neutral-400 text-center">
            <td className="border dark:border-neutral-400">{thickness}</td>
            <td className="border dark:border-neutral-400"><input type='text' className='text-center' /* size={3}  */></input></td>
            <td className="border dark:border-neutral-400"><input type='text' className='text-center' /* size={3}  */></input></td>
            <td className="border dark:border-neutral-400"><input type='text' className='text-center' /* size={3}  */></input></td>
            <td className="border dark:border-neutral-400"><input type='text' className='text-center' /* size={3}  */></input></td>
            <td className="border dark:border-neutral-400"><input type='text' className='text-center' /* size={3}  */></input></td>
            <td className="border dark:border-neutral-400"><input type='text' className='text-center' /* size={3}  */></input></td>
            <td className="border dark:border-neutral-400"><input type='text' className='text-center' /* size={15} */></input></td>
            <td className="border dark:border-neutral-400"><input type='text' className='text-center' /* size={15} */></input></td>
            <td className="border dark:border-neutral-400"><input type='text' className='text-center' /* size={3}  */></input></td>
            <td className="border dark:border-neutral-400"><input type='text' className='text-center' /* size={7}  */></input></td>
            <td className="border dark:border-neutral-400"><input type='text' className='text-center' /* size={7}  */></input></td>
            <td className="border dark:border-neutral-400"><input type='text' className='text-center' /* size={3}  */></input></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
})
