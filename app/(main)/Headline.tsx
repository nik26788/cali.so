'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { SocialLink } from '~/components/links/SocialLink'

function Developer() {
  return (
    <span className="group">
      <span className="font-mono">&lt;</span>开发者
      <span className="font-mono">/&gt;</span>
      <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
    </span>
  )
}

function Designer() {
  return <span className="group relative ">FPV无人机探索者</span>
}

// function OCD() {
//   return (
//     <span className="group inline-flex items-center">
//       <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
//       <span>细节控</span>
//     </span>
//   )
// }

// function Founder() {
//   return (
//     <span className="group inline-flex items-center">
//       <UserSecurityIcon className="mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20" />
//       <span>创始人</span>
//     </span>
//   )
// }

export function Headline() {
  return (
    <div className="max-w-3xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <Developer />，
        <Designer />
        <span className="block h-2" />
        {/* <OCD />，<Founder /> */}
      </motion.h1>
      <motion.p
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          我是 Nik， 一名前端开发工程师，同时也是一名FPV飞手。
          很享受在严谨的编程逻辑与刺激的破风飞行间切换的节奏，
          始终相信，最好的程序像散文般简洁，最酷的飞行轨迹无需提前规划。
          {/* <PeekabooLink href="https://zolplay.com">佐玩</PeekabooLink>
          创始人，目前带领着佐玩致力于创造一个充满创造力的工作环境，同时鼓励团队创造影响世界的产品。
          我热爱开发，设计，创新，享受生活，以及在未知领域中探索。 */}
        </Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        {/* <SocialLink
          href="https://cali.so/twitter"
          aria-label="我的推特"
          platform="twitter"
        /> */}
        {/* <SocialLink
          href="https://cali.so/youtube"
          aria-label="我的 YouTube"
          platform="youtube"
        /> */}
        {/* <SocialLink
          href="https://cali.so/bilibili"
          aria-label="我的 Bilibili"
          platform="bilibili"
        /> */}
        <SocialLink
          href="https://cali.so/github"
          aria-label="我的 GitHub"
          platform="github"
        />
        {/* <SocialLink
          href="https://cali.so/tg"
          aria-label="我的 Telegram"
          platform="telegram"
        /> */}
        {/* <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" /> */}
        <SocialLink
          href="mailto:hi@nikdev.cn"
          aria-label="我的邮箱"
          platform="mail"
        />
      </motion.div>
    </div>
  )
}
