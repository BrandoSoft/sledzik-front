import React from 'react';

const Features = () => {
    return (
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Koci Śledzik!</h2>
                    <h3 className="section-subheading text-muted">Obserwuj życie swojego kota!</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Odkrywaj</h4>
                        <p className="text-muted">Odkrywaj nocne ścieżki swojego kota, zobacz gdzie chodzi gdy nie ma go w domu :D </p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Obserwuj</h4>
                        <p className="text-muted">Zobacz "tereny łowieckie" swojego kota, sprawdz czy nie przebywa więcej u somsiada niż w</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Oglądaj na żywo</h4>
                        <p className="text-muted">Obserwuj w czasie rzeczywistym, gdzie przebywa Twoj KOT!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;