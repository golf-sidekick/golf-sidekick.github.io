import {Body} from 'components/body'
import React from 'react'
import {ScreenShot} from 'components/screen-shot'
import {TopMenu} from 'components/top-menu'
import apple from 'assets/apple.svg'
import classNames from 'classnames'
import google from 'assets/google.png'
import screenshot1 from 'assets/screenshot-1.png'

const googleLink =
  'https://play.google.com/store/apps/details?id=com.golfsidekick'
const appleLink = 'https://apps.apple.com/us/app/keynote/id1524843710'

const Section = ({
  children,
  className
}: {
  children: React.ReactNode | React.ReactNodeArray
  className?: string
}) => {
  return (
    <div
      className={classNames(
        'flex',
        'flex-col',
        'md:flex-row',
        'flex-wrap',
        'justify-center',
        'items-center',
        'py-9',
        className
      )}>
      {children}
    </div>
  )
}

const Break = ({inverse = false}: {inverse?: boolean}) => {
  return (
    <svg className={'fill-current text-white'} viewBox={'0 0 100 5'}>
      {inverse ? (
        <polygon points="100,0 0,0 0,5" />
      ) : (
        <polygon points="100,0 100,5 0,5" />
      )}
    </svg>
  )
}

const LandingScreen = () => {
  return (
    <Body>
      <TopMenu />
      <Section>
        <div className={'flex flex-col items-center text-white'}>
          <div className={'w-7/12 text-center'}>
            <h1 className={'text-6xl lg:text-8xl font-black mb-6 text-shadow'}>
              Welcome Playa!
            </h1>
            <h2 className={'text-lg font-normal mb-12 text-shadow'}>
              Plan golf games with like minded strangers to build a community of
              new friends.
            </h2>
            <div className={'flex flex-row justify-center items-endmt-4'}>
              <a href={googleLink}>
                <img
                  className={'object-contain max-h-16'}
                  src={google}
                  alt={'Google Play Store'}
                />
              </a>
              <a href={appleLink}>
                <img
                  className={'object-contain max-h-16 p-3'}
                  src={apple}
                  alt={'Apple App Store'}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={'pt-9 lg:pt-0 flex items-center justify-center'}>
          <div className={'max-w-xs'}>
            <ScreenShot src={screenshot1} />
          </div>
        </div>
      </Section>
      <Break />
      <footer className="p-10 footer footer-center bg-white">
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover" href={'https://golfsidekick.com/'}>
            About us
          </a>
          <a className="link link-hover" href={'https://golfsidekick.com/'}>
            Contact
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover" href={'eula.html'}>
            End-User License Agreement
          </a>
          <a className="link link-hover" href={'privacy-policy.html'}>
            Privacy policy
          </a>
        </div>
      </footer>
    </Body>
  )
}

export default LandingScreen
