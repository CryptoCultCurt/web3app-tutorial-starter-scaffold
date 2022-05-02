import React from 'react';

const About = () => {
    return (
        <div className="section-grey wf-section">
            <div className="div-block-1200">
                <div className="w-row">
                    <div className="column w-col w-col-9">
                        <h1 className="heading-1">ABOUT BIG CHEEZE</h1>
                        <p className="body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>
                        <div className="div-block-1202">
                            <a href="#" className="button-regular w-inline-block"><div className="text-block">Join Telegram</div></a><a href="#" className="button-regular w-inline-block"><div className="text-block-2">Download White Papers</div></a>
                        </div>
                    </div>
                    <div className="column-3 w-col w-col-3"><img src="https://assets.website-files.com/6267045bbcf1451f09d3ed15/62670ba7a84a0d9ffaf983cc_Big-Cheeze-Mouse.png" loading="lazy" width="249" alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default About;
