import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';

export default function Footer({ fields }) {
  return (
    <>
      <div className="footerSection__img-wrapper">
        <img className="footerSection__icon" src={fields.logoImage.fields.image.fields.file.url} alt="" />
      </div>
      <Link href={`/${fields.ctaButton.linkUrl}`}>
        <button className="footerSection__cta-button" type="button">{fields.ctaButton.fields.linkLabel}</button>
      </Link>
      <div className="footerSection__nav-links-wrapper">
        {fields.navlinks.map((link) => (
          <Link key={link.sys.id} href={`/${link.fields.linkUrl}`}>
            <a href={`/${link.fields.linkUrl}`} className="footerSection__link">{link.fields.linkLabel}</a>
          </Link>
        ))}
      </div>
      <hr className="footerSection__line" />
      <div className="footerSection__custom-info">{documentToReactComponents(fields.customInfo)}</div>
    </>
  );
}