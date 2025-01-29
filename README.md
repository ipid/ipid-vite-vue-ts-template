<h1 align="center">
  我的 Vue 项目
</h1>
<p align="center">
  <i>基于 <b>Vue 3 + TypeScript + Element Plus + SCSS</b> 的 Vue 单页应用，</i>
</p>
<p align="center">
  <i>配置了 <b>ESLint + Stylelint + Prettier + Husky + Lint-Staged</b>，使用 <b>Vitest</b> 进行单元测试。</i>
</p>

## 📖 项目说明

- 自带 Vue 3 + TypeScript + Element Plus + SCSS 支持。
- 配置了 Husky + Lint-Staged + ESLint + Stylelint + Prettier，提供 Vitest 单测示例，且支持 TypeScript 和 TSX，保证代码风格统一。
- 模板里的东西几乎都是必要的！你不需要删掉很多东西就能着手开发。

<br>

## 💼 搭建开发环境

- 安装 Node.js 最新的 LTS 版本。Windows 用户请[前往官网下载](https://nodejs.org/zh-cn/download)，macOS 和 Linux 用户请使用 [nvm](https://github.com/nvm-sh/nvm) 安装。
- 本项目只能使用 pnpm 来开发，所以开发前需安装 pnpm：

```bash
npm i -g pnpm
```

- 进入到项目目录中，并使用 `pnpm i` 安装依赖包：

```bash
cd 项目目录
pnpm i
```

- 使用 `dev` 命令运行临时 Web 开发服务器：

```bash
pnpm dev
```

- 使用 `build` 命令将代码编译为静态 HTML、CSS 和 JS 文件：

```bash
pnpm build
```

- 在完成编译后，若想在本地启动一个预览服务器，来预览编译好的 HTML 文件，可使用 `preview` 命令：

```bash
# 必须在 pnpm build 之后才能使用
pnpm preview
```

<br>

## 🛠️ 格式化代码并检查 TypeScript 错误

如果你想在提交之前格式化代码、检查 TypeScript 类型定义是否正确，或者修改了 ESLint、Stylelint 等配置之后想要格式化存量代码，可以运行以下命令：

```shell
pnpm lint
```

这条命令会检测所有格式、类型问题，并尝试修复，如果修复不成功会输出错误。

<br>

## 🧪 尝试执行代码片段

你可以在 playground 文件夹中放入想要尝试执行的代码片段。

建议使用 TypeScript，编写后使用 `tsx playground/xx.ts` 即可在 Node 环境中运行。

<br>

## ✅ 编写并运行单元测试

你可以模仿代码中的 `.test.ts` 文件来编写单测。

想运行单测时，你可以在 VSCode 里安装 Vitest 插件，也可以执行如下命令：

```shell
npx vitest <留空表示全部运行，有内容表示运行指定的单测文件>
```

<br>

## ⚖️ 版权相关

本项目按照 MIT 协议授权发布，具体内容请参考 [LICENSE](LICENSE) 文件。

**⚠️：如果你不想用 MIT 协议，记得一定要改掉这里的内容！**

**⚠️：就算你用 MIT，也要记得改 LICENSE 里的年份和作者名！**

<br>

## 💡 关于 IDE 智能提示

WebStorm 用户可以直接打开项目进行开发。VSCode 用户可以安装「工作区推荐的插件」来开发。

<br>
