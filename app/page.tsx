'use client'

import type { Value } from 'platejs'
import {
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
} from '@platejs/basic-nodes/react'
import { Plate, PlateContent, usePlateEditor } from 'platejs/react'

const initialValue: Value = [
  {
    type: 'p',
    children: [
      { text: '您好！试试' },
      { text: '加粗', bold: true },
      { text: '、' },
      { text: '斜体', italic: true },
      { text: '和' },
      { text: '下划线', underline: true },
      { text: '效果。' },
    ],
  },
];

export default function Home() {

  const editor = usePlateEditor({
    value: initialValue,
    plugins: [BoldPlugin, ItalicPlugin, UnderlinePlugin],
  });
  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-2xl font-bold text-center">Plate Editor Template</h1>
      <Plate editor={editor}>
        <PlateContent 
          style={{
            padding: '12px 24px',
            minHeight: '150px',
          }}
          placeholder="Enter some text..."
        />
      </Plate>
    </div>
  )
}