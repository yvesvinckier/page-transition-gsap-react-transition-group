import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 24px 24px 24px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 100;
  mix-blend-mode: difference;
  svg {
    width: 12rem;
    fill: #fff;
    z-index: 100;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: flex-end;
  height: 100%;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 0.75rem;
    list-style: none;
  }
  a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.85rem;
    padding: 0.5rem 1rem 0.25rem;
    display: inline-block;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <a
        className="brand"
        href="https://greensock.com/"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 90.709 11.339"
        >
          <g>
            <circle cx="3.627" cy="7.78" r="2.209" />
            <circle cx="9.624" cy="7.78" r="1.591" />
            <circle cx="15.62" cy="7.78" r="2.209" />
            <g>
              <path d="M25.584,9.78h-0.836V2.302h-2.752V1.558h6.34v0.743h-2.752V9.78z" />
              <path
                d="M30.403,9.78h-0.836V1.558h2.416c0.403,0,0.776,0.039,1.121,0.116c0.344,0.077,0.642,0.203,0.894,0.378
			c0.251,0.174,0.447,0.401,0.586,0.679c0.139,0.279,0.209,0.619,0.209,1.022c0,0.302-0.054,0.577-0.163,0.825
			c-0.108,0.248-0.255,0.463-0.441,0.645c-0.186,0.182-0.406,0.327-0.662,0.436c-0.256,0.108-0.534,0.178-0.836,0.209l2.404,3.913
			h-1.022l-2.276-3.844h-1.393V9.78z M30.403,5.217h1.452c0.673,0,1.192-0.122,1.556-0.366c0.364-0.244,0.546-0.61,0.546-1.097
			c0-0.271-0.051-0.499-0.151-0.685c-0.101-0.186-0.24-0.337-0.418-0.453c-0.178-0.116-0.395-0.201-0.651-0.256
			c-0.255-0.054-0.538-0.081-0.848-0.081h-1.486V5.217z"
              />
              <path
                d="M36.465,9.78h-0.917l3.553-8.222h0.813l3.53,8.222h-0.929l-0.906-2.16h-4.25L36.465,9.78z M37.672,6.854h3.623
			l-1.812-4.367L37.672,6.854z"
              />
              <path d="M50.482,8.561h0.023V1.558h0.836V9.78h-1.045l-4.784-7.072h-0.023V9.78h-0.836V1.558h1.045L50.482,8.561z" />
              <path
                d="M57.508,2.882c-0.178-0.248-0.406-0.447-0.685-0.598c-0.279-0.151-0.616-0.226-1.01-0.226
			c-0.202,0-0.407,0.031-0.616,0.093c-0.209,0.062-0.399,0.156-0.569,0.284c-0.171,0.128-0.308,0.288-0.413,0.482
			c-0.104,0.193-0.156,0.422-0.156,0.685s0.05,0.48,0.15,0.65c0.1,0.17,0.233,0.316,0.4,0.435c0.166,0.12,0.355,0.219,0.567,0.296
			c0.212,0.077,0.434,0.155,0.666,0.232c0.285,0.093,0.573,0.193,0.863,0.302c0.289,0.108,0.55,0.249,0.782,0.424
			c0.232,0.174,0.421,0.395,0.568,0.662c0.146,0.267,0.22,0.606,0.22,1.016s-0.078,0.765-0.235,1.063
			c-0.157,0.298-0.36,0.544-0.61,0.737c-0.25,0.194-0.536,0.337-0.857,0.43c-0.321,0.093-0.645,0.139-0.97,0.139
			c-0.248,0-0.495-0.025-0.743-0.075c-0.248-0.051-0.484-0.126-0.708-0.227c-0.224-0.1-0.434-0.228-0.627-0.383
			C53.33,9.149,53.16,8.971,53.013,8.77l0.72-0.534c0.178,0.294,0.428,0.54,0.749,0.738c0.321,0.198,0.698,0.296,1.132,0.296
			c0.209,0,0.422-0.033,0.639-0.099c0.216-0.066,0.412-0.166,0.586-0.302c0.174-0.136,0.317-0.302,0.43-0.499
			c0.112-0.198,0.168-0.428,0.168-0.691c0-0.286-0.056-0.525-0.168-0.714c-0.112-0.189-0.261-0.348-0.447-0.476
			c-0.186-0.128-0.399-0.234-0.639-0.319c-0.24-0.085-0.492-0.17-0.755-0.256c-0.271-0.085-0.538-0.182-0.801-0.29
			c-0.263-0.108-0.499-0.25-0.708-0.424c-0.209-0.174-0.378-0.389-0.505-0.645c-0.128-0.256-0.192-0.569-0.192-0.941
			c0-0.395,0.079-0.735,0.238-1.022c0.159-0.286,0.366-0.522,0.621-0.708c0.255-0.186,0.538-0.321,0.848-0.406
			c0.31-0.085,0.615-0.128,0.917-0.128c0.558,0,1.034,0.099,1.428,0.296c0.395,0.197,0.693,0.431,0.894,0.702L57.508,2.882z"
              />
              <path d="M60.91,9.78h-0.836V1.558h0.836V9.78z" />
              <path d="M65.729,9.78h-0.836V2.302h-2.752V1.558h6.34v0.743h-2.752V9.78z" />
              <path d="M70.549,9.78h-0.836V1.558h0.836V9.78z" />
              <path
                d="M80.86,5.669c0,0.627-0.108,1.204-0.325,1.73c-0.217,0.526-0.516,0.981-0.9,1.365c-0.383,0.383-0.836,0.683-1.359,0.9
			c-0.523,0.217-1.09,0.325-1.701,0.325c-0.612,0-1.179-0.108-1.702-0.325c-0.523-0.216-0.975-0.516-1.359-0.9
			c-0.383-0.383-0.683-0.838-0.9-1.365c-0.216-0.526-0.325-1.103-0.325-1.73s0.109-1.204,0.325-1.73
			c0.217-0.526,0.517-0.981,0.9-1.364s0.836-0.683,1.359-0.9c0.523-0.217,1.09-0.325,1.702-0.325c0.611,0,1.178,0.108,1.701,0.325
			c0.523,0.217,0.976,0.517,1.359,0.9s0.683,0.838,0.9,1.364C80.752,4.466,80.86,5.042,80.86,5.669z M79.978,5.675
			c0-0.479-0.077-0.935-0.232-1.368c-0.155-0.433-0.379-0.813-0.673-1.142c-0.294-0.329-0.653-0.59-1.075-0.783
			s-0.896-0.29-1.422-0.29c-0.527,0-1.001,0.096-1.423,0.29c-0.422,0.193-0.78,0.454-1.074,0.783
			c-0.294,0.328-0.519,0.709-0.673,1.142c-0.155,0.433-0.232,0.889-0.232,1.368c0,0.48,0.077,0.936,0.232,1.368
			c0.155,0.433,0.379,0.811,0.673,1.136c0.294,0.325,0.652,0.584,1.074,0.777c0.422,0.193,0.896,0.29,1.423,0.29
			c0.526,0,1-0.097,1.422-0.29s0.78-0.452,1.075-0.777c0.294-0.325,0.518-0.703,0.673-1.136C79.9,6.611,79.978,6.155,79.978,5.675z"
              />
              <path d="M88.432,8.561h0.023V1.558h0.836V9.78h-1.045l-4.784-7.072h-0.023V9.78h-0.836V1.558h1.045L88.432,8.561z" />
            </g>
          </g>
        </svg>
      </a>
      <StyledNav>
        <ul>
          <li>
            <Link to="/" className="button">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="button">
              Contact
            </Link>
          </li>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
