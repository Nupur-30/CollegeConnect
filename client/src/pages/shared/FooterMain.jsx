
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const FooterMain = () => {
  return (
    <Footer bgDark>
      <div className="w-full px-4 lg:px-24">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="/about">
                About
              </Footer.Link>
              <Footer.Link href="#">
                Careers
              </Footer.Link>
              <Footer.Link href="#">
                Brand Center
              </Footer.Link>
              <Footer.Link href="/blog">
                Blog
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="https://discord.com/">
                Discord Server
              </Footer.Link>
              <Footer.Link href="https://twitter.com/login">
                Twitter
              </Footer.Link>
              <Footer.Link href="https://www.facebook.com/login">
                Number: 999999999
              </Footer.Link>
              <Footer.Link href=''>Contact Us
              </Footer.Link>

            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#">
                Licensing
              </Footer.Link>
              <Footer.Link href="#">
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                iOS
              </Footer.Link>
              <Footer.Link href="#">
                Android
              </Footer.Link>
              <Footer.Link href="#">
                Windows
              </Footer.Link>
              <Footer.Link href="#">
                MacOS
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="MUJ Academic Connect"
            href="#"
            year={2024}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/login/"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/accounts/login/"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://twitter.com/login"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://github.com/login"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default FooterMain;