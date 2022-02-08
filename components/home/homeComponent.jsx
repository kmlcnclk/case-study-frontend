import React, { Component } from 'react';

class HomeComponent extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="w-full ml-36 mr-[230px] p-10">
        <h1 className="font-semibold text-3xl text-gray-800">{t.loremMainH}</h1>
        <div className="mt-20">
          <h2 className="font-semibold text-2xl text-gray-700">{t.loremH1}</h2>
          <p className="mt-14 font-sans text-gray-600">{t.loremP1}</p>
        </div>
        <div className="mt-16">
          <h2 className="font-semibold text-2xl text-gray-700">{t.loremH2}</h2>
          <p className="mt-14 font-sans text-gray-600">{t.loremP2}</p>
        </div>
        <div className="mt-20">
          <h2 className="font-semibold text-2xl text-gray-700">{t.loremH3}</h2>
          <p className="mt-14 font-sans text-gray-600">{t.loremP3}</p>
        </div>
        <div className="mt-16">
          <h2 className="font-semibold text-2xl text-gray-700">{t.loremH4}</h2>
          <p className="mt-14 font-sans text-gray-600">{t.loremP4}</p>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
