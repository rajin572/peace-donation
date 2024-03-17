import { Link } from "react-router-dom";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const view = useRef<HTMLDivElement>(null);
  const inView = useInView(view);
  return (
    <motion.footer
      className="bg-primary text-secondary border-t-2 border-t-secondary"
      ref={view}
      animate={
        inView
          ? { opacity: 1, y: 0, transition: { duration: 0.5 } }
          : { opacity: 0, y: 100, transition: { duration: 0.5 } }
      }
    >
      <div className="mt-16">
        <div className="grid grid-cols-12 px-4 lg:px-8 xl:px-16">
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <div>
              <Link
                to="/"
                className="text-2xl cursor-pointer flex items-end gap-1"
              >
                <span className="font-bold opacity-90">Peace</span>
              </Link>
            </div>

            <p className="w-11/12 leading-loose text-slate-500 text-start mt-4">
              Thank you for visiting! Your support drives our mission forward.
              For inquiries or collaborations, reach out via Email or Phone.
              Stay updated on our initiatives by following us on social media.
              Together, we can create meaningful change and empower communities
              in need.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-start-9 lg:col-end-13 text-start">
            <p className="text-xl font-semibold pb-7 pt-10 md:pt-2">
              Contact Us
            </p>
            <ul className="space-y-2 text-white">
              <li className="leading-relaxed w-10/12">
                Gulshan 2, Dhaka, Bangladesh
              </li>
              <li>
                Phone:
                <span className="text-secondary"> (123) 123-456 </span>
              </li>
              <li>
                E-Mail:
                <span className="text-secondary"> office@peace.com</span>
              </li>
            </ul>
            <div className="flex justify-start items-center gap-5 my-5">
              <Facebook className="text-secondary cursor-pointer" />
              <Linkedin className="text-secondary cursor-pointer" />
              <Instagram className="text-secondary cursor-pointer" />
              <Twitter className="text-secondary cursor-pointer" />
            </div>
          </div>
        </div>
        <hr className="w-10/12 mx-auto mt-20" />
        <div className="flex justify-center py-8 text-lg">
          © Copyright {currentYear} by Peace
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
