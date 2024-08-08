import styled from "styled-components";

const Logo = styled.img`
  object-fit: contain;
  flex-shrink: 0;
  width: ${(props) => props.size || "2.25rem"};
  aspect-ratio: 1 / 1;
`;

const LargeLogo = styled(Logo)`
  object-fit: cover;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

const Main = () => {
  return (
    <div className="flex flex-col rounded-none">
      <style>
        {`
          .flex {
            display: flex;
          }
          .flex-col {
            flex-direction: column;
          }
          .flex-wrap {
            flex-wrap: wrap;
          }
          .gap-10 {
            gap: 2.5rem;
          }
          .items-start {
            align-items: flex-start;
          }
          .px-16 {
            padding-left: 4rem;
            padding-right: 4rem;
          }
          .py-12 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          .w-full {
            width: 100%;
          }
          .text-black {
            color: black;
          }
          .bg-blue-500 {
            background-color: #3b82f6;
          }
          .bg-opacity-10 {
            background-color: rgba(59, 130, 246, 0.1);
          }
          .max-md\\:px-5 {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }
          .max-md\\:max-w-full {
            max-width: 100%;
          }
          .shrink-0 {
            flex-shrink: 0;
          }
          .w-px {
            width: 1px;
          }
          .border {
            border-width: 1px;
            border-style: solid;
          }
          .border-black {
            border-color: black;
          }
          .h-\\[41px\\] {
            height: 41px;
          }
          .text-2xl {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          .font-medium {
            font-weight: 500;
          }
          .font-bold {
            font-weight: 700;
          }
          .text-neutral-300 {
            color: #d1d5db;
          }
          .gap-5 {
            gap: 1.25rem;
          }
          .mt-1\\.5 {
            margin-top: 0.375rem;
          }
          .text-sm {
            font-size: 0.875rem;
            line-height: 1.25rem;
          }
          .font-semibold {
            font-weight: 600;
          }
          .object-contain {
            object-fit: contain;
          }
          .w-9 {
            width: 2.25rem;
          }
          .aspect-square {
            aspect-ratio: 1 / 1;
          }
          .my-auto {
            margin: auto;
          }
          .mt-8 {
            margin-top: 2rem;
          }
          .ml-24 {
            margin-left: 6rem;
          }
          .max-w-full {
            max-width: 100%;
          }
          .w-\\[1037px\\] {
            width: 1037px;
          }
          .px-9 {
            padding-left: 2.25rem;
            padding-right: 2.25rem;
          }
          .py-3\\.5 {
            padding-top: 0.875rem;
            padding-bottom: 0.875rem;
          }
          .text-lg {
            font-size: 1.125rem;
            line-height: 1.75rem;
          }
          .rounded-xl {
            border-radius: 0.75rem;
          }
          .bg-neutral-200 {
            background-color: #e5e7eb;
          }
          .self-center {
            align-self: center;
          }
          .mt-24 {
            margin-top: 6rem;
          }
          .text-4xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
          .max-md\\:mt-10 {
            margin-top: 2.5rem;
          }
          .relative {
            position: relative;
          }
          .justify-center {
            justify-content: center;
          }
          .self-center {
            align-self: center;
          }
          .px-0\\.5 {
            padding-left: 0.125rem;
            padding-right: 0.125rem;
          }
          .py-px {
            padding-top: 1px;
            padding-bottom: 1px;
          }
          .ml-24 {
            margin-left: 6rem;
          }
          .text-7xl {
            font-size: 4.5rem;
            line-height: 1;
          }
          .whitespace-nowrap {
            white-space: nowrap;
          }
          .rounded-full {
            border-radius: 9999px;
          }
          .aspect-\\[1\\.12\\] {
            aspect-ratio: 1.12 / 1;
          }
          .w-\\[262px\\] {
            width: 262px;
          }
          .max-md\\:text-4xl {
            font-size: 2.25rem;
            line-height: 1;
          }
          .aspect-\\[1\\.116\\] {
            aspect-ratio: 1.116 / 1;
          }
          .absolute {
            position: absolute;
          }
          .inset-0 {
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
          .size-full {
            width: 100%;
            height: 100%;
          }
        `}
      </style>

      {/* <Navbar /> */}
      <div className="flex flex-col items-end self-center mt-8 ml-24 max-w-full w-[1037px]">
        <div className="flex flex-wrap gap-5 self-start px-9 py-3.5 text-lg font-semibold text-black rounded-xl bg-neutral-200 max-md:px-5">
          <Logo
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e490ac2c4523655630e94f97e2f2195a0cab7fea10e3b122c7e0cb1b2d60602?apiKey=3a6a44e65e3d4730a76b1db009e247ae&&apiKey=3a6a44e65e3d4730a76b1db009e247ae"
            size="1.5rem"
          />
          <div className="flex-auto">Search your domain, URL or keyword..</div>
        </div>
        <div className="self-center mt-24 text-4xl font-semibold text-black max-md:mt-10 max-md:max-w-full">
          Your results for cbb.coastalbroadband.in{" "}
        </div>
        <div className="flex relative flex-col justify-center self-center px-0.5 py-px mt-24 ml-24 max-w-full text-7xl font-bold text-black whitespace-nowrap rounded-full aspect-[1.12] w-[262px] max-md:mt-10 max-md:text-4xl">
          <LargeLogo
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a9c26deb77c1abe5f30ef0ce0aee806265c914932c355f69ea5da780c0c9bae?apiKey=3a6a44e65e3d4730a76b1db009e247ae&&apiKey=3a6a44e65e3d4730a76b1db009e247ae"
          />
          <div className="flex relative flex-col px-16 py-24 rounded-full aspect-[1.116] max-md:px-5 max-md:text-4xl">
            <LargeLogo
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/09835bc333492c9744e04821ed02896f7e88ed3f8730a61f090c12d2f4db570b?apiKey=3a6a44e65e3d4730a76b1db009e247ae&&apiKey=3a6a44e65e3d4730a76b1db009e247ae"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
