import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const filePath = fileURLToPath(import.meta.url)
const content = readFileSync(filePath, 'utf-8')

console.log(`
成功读取本文件内容：
--------------------------------
${content}
--------------------------------
`)

// 文件结束
