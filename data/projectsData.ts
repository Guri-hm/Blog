interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'ClassMemo',
    description: `教務手帳のWebアプリです。日々の授業の内容や欠課を記録できます。`,
    imgSrc: '/static/images/classmemo.svg',
    href: 'https://solopg.com/classmemo',
  },
  {
    title: 'ThickSlice',
    description: `PDFファイルや画像ファイルを複数の矩形に分割しダウンロードできます。`,
    imgSrc: '/static/images/thickslice.svg',
    href: 'https://solopg.com/app/thickslice',
  },
  {
    title: 'ドット絵ツクール',
    description: `ドット絵を描けます。また，その絵をもとにお絵描きロジックを作成できます。`,
    imgSrc: '/static/images/pxlart.png',
    href: 'https://solopg.com/next/app',
  },
  {
    title: 'ぎじげんごいじるこ',
    description: `大学入試共通テストの情報Ⅰで使用される疑似言語で，実際のプログラミングが体験できます。`,
    imgSrc: '/static/images/dncl.webp',
    href: 'https://solopg.com/next/dncl',
  },
  {
    title: 'QRコードリーダー',
    description: `端末のカメラを使い，ブラウザ上でQRコードを読み取れます。シフトJIS対応版です。`,
    imgSrc: '/static/images/qr_reader.png',
    href: 'https://solopg.com/tool/reader.html',
  },
]

export default projectsData
