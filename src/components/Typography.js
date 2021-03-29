import React from "react";

export default function Typography() {
  return (
    <div className="component-wrapper container-md">
      <h2 className="mb-4">Typography</h2>
      <h3>Headline</h3>
      <div className="text-headline1">HEADLINE</div>
      <div className="text-headline2">HEADLINE</div>
      <div className="text-headline3">HEADLINE</div>
      <div className="text-headline4 mb-4">HEADLINE</div>
      <h3 className="mb-3">h1-h6</h3>
      {/* h1-h6 */}
      <div className="text-h1">Heading</div>
      <div className="text-h2">Heading</div>
      <div className="text-h3">Heading</div>
      <div className="text-h4">Heading</div>
      <div className="text-h5">Heading</div>
      <div className="text-h6 mb-4">Heading</div>
      <h3 className="mb-3">Subtitle</h3>
      <div className="text-subtitle1">This is subititle 1</div>
      <div className="text-subtitle2 mb-4">This is subititle 2</div>
      <h3 className="mb-3">Body</h3>
      <div className="text-body1">This is body 1</div>
      <div className="text-body2 mb-4">This is body 2</div>
      <h3 className="mb-3">Button</h3>
      <div className="text-button mb-4">Button font size</div>
      <h3 className="mb-3">Caption</h3>
      <div className="text-caption mb-4">This is a text caption.</div>
      <h3 className="mb-3">Overline</h3>
      <div className="text-overline mb-4">This is an overline.</div>
      <h3>Font Weight</h3>
      <div className="text-thin">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
        doloribus quidem dignissimos.{" "}
      </div>
      <div className="text-extralight">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
        doloribus quidem dignissimos.{" "}
      </div>
      <div className="text-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
        doloribus quidem dignissimos.{" "}
      </div>
      <div className="text-normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
        doloribus quidem dignissimos.{" "}
      </div>
      <div className="text-medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
        doloribus quidem dignissimos.{" "}
      </div>
      <div className="text-semibold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
        doloribus quidem dignissimos.{" "}
      </div>
      <div className="text-bold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
        doloribus quidem dignissimos.{" "}
      </div>
      <div className="text-extrabold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
        doloribus quidem dignissimos.{" "}
      </div>
      <div className="text-black">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
        doloribus quidem dignissimos.{" "}
      </div>
      <h3>Text Align</h3>
      <div className="container-xs text-center mb-4">
        Text center: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Corporis aliquam praesentium temporibus consequuntur incidunt.
      </div>
      <div className="container-xs text-left mb-4">
        Text Left: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Corporis aliquam praesentium temporibus consequuntur incidunt.
      </div>
      <div className="container-xs text-right mb-4">
        Text Right: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Corporis aliquam praesentium temporibus consequuntur incidunt.
      </div>
      <div className="container-xs text-justify mb-4">
        Text Justify: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Corporis aliquam praesentium temporibus consequuntur incidunt.
      </div>
    </div>
  );
}
