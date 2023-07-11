import Svg, {
  Path,
  Defs,
  Pattern,
  Image,
  Use,
} from "react-native-svg";

export const EnvelopIcon = ({ width, height }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={18}
      fill="none"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        fill="#C3C3c3"
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      />
      <Path d="m22 6-10 7L2 6" />
    </Svg>
  );
};

export const LockIcon = () => (
  <Svg
    width={20}
    height={18}
    stroke="white"
    strokeWidth={2}
    viewBox="0 0 124 124"
  >
    <Path
      fill="#C3C3C3"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.892 56.036h8.959V37.117c0-10.205 4.177-19.484 10.898-26.207v-.009C29.473 4.177 38.754 0 48.966 0 59.17 0 68.449 4.177 75.173 10.901l.01.009c6.721 6.723 10.898 16.002 10.898 26.207v18.919h7.136a2.901 2.901 0 0 1 2.892 2.891v61.062a2.901 2.901 0 0 1-2.892 2.891H2.892A2.901 2.901 0 0 1 0 119.989V58.927a2.901 2.901 0 0 1 2.892-2.891zm23.379 0h45.387V36.911c0-6.24-2.554-11.917-6.662-16.03l-.005.004c-4.111-4.114-9.787-6.669-16.025-6.669-6.241 0-11.917 2.554-16.033 6.665-4.109 4.113-6.662 9.79-6.662 16.03v19.125zm22.878 33.412 4.581 21.139-12.557.053 3.685-21.423c-3.431-1.1-5.918-4.315-5.918-8.111a8.512 8.512 0 1 1 10.209 8.342z"
    />
  </Svg>
);

export const PersonIcon = ({ height, color }) => (
  <Svg width={20} height={height} fill={color}>
    <Path fill="none" d="M0 0h24v24H0V0z" />
    <Path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z" />
  </Svg>
);

export const PhoneIcon = () => (
  <Svg width={22} height={20} viewBox="0 0 48 48" fill="#C3C3C3">
    <Path fill="none" d="M0 0h48v48H0z" />
    <Path d="M34 2.02 14 2c-2.21 0-4 1.79-4 4v36c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V6c0-2.21-1.79-3.98-4-3.98zM34 38H14V10h20v28z" />
  </Svg>
);

export const ArrowIcon = () => (
  <Svg viewBox="0 0 24 24" width={22} height={22} fill="#000000">
    <Path d="M1.293 12.707a1 1 0 0 1-.216-.325.986.986 0 0 1 0-.764 1 1 0 0 1 .216-.325l8-8a1 1 0 1 1 1.414 1.414L4.414 11H22a1 1 0 0 1 0 2H4.414l6.293 6.293a1 1 0 0 1-1.414 1.414Z" />
  </Svg>
);

export const HamburgerIcon = () => (
  <Svg width={30} height={30} viewBox="0 0 24 24" fill="#000000">
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M18.2 12.7H5.8c-.5 0-.8-.3-.8-.7s.3-.7.7-.7h12.5c.4 0 .7.3.7.7s-.2.7-.7.7zm.8-4.9c0-.5-.3-.8-.7-.8H5.8c-.5 0-.8.4-.8.8s.3.7.7.7h12.5c.5 0 .8-.3.8-.7zm0 8.4c0-.4-.3-.7-.7-.7H5.8c-.4 0-.7.3-.7.7-.1.4.3.8.7.8h12.5c.4 0 .7-.3.7-.8z" />
  </Svg>
);

export const AppIcon = (props) => (
  <Svg width={33} height={20} fill="red">
    <Path fill="url(#a)" d="M0 0h33v20H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.00631 0 0 .01042 .197 0)" />
      </Pattern>
      <Image
        id="b"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAFAUlEQVR4nO2dTWgdVRTHf+9piCbGj5ruqqI2FQXFDxQUSgMiIoJ0owZdua0uFBeKVeonuBAXigtF1JVtQdGNH9FAgx/4haigIiiFtjRaTcRYJK+S5Lk4o9iXeW/uzNx7z0zm/OBs3rx37/+c886dz3sHDMMwDGMwm4E9wK9AV9l+Bt4EtgMnhnS6KkxQjcCn2WHgMeCcYN5XgD3oBzrLVoD3gZuBoTBh0GEYWEI/wHmHqCeBcwPEIzqT6Ae00VXxMPqBbHRV7EM/eI2tijqO/+uqKuo8/uetijeQc53otAdsm4ymQpc2clL3CQpJGJSAbdFUVINx4InYnbb6fD4M/AGcFFFLFZgHNsbssF8FXE3zgg9SBVHpl4CmjP/q9EtA08Z/NdL2AU0d//+l334xCGkV0NTxX4W0BNj4H5G0BNj4H5G08W4RODW2kAqhvg+IKqBiLMbuMC0B78UWUSGmtQWA3ISfR/8qZWxbADZ5iJ8XNgOvIecD2oEJbYvA68gfzzAMwzBqwQbgHuBDYA79nWmvzQEfJBrPCBQDNaaAP9EPcp4jnakgkVBgJ/oBLWoPBIhHVG5CHuPQDmRRW0l8qCUTSClrB7GsHQUu9Byb4IwC36IfPF/2AzDmNUKBeQX9oPm23V4jFJAd6AcrlO3wGKcgXAl0yHbkR4qXdFbbRRhLNGW13QGuKthHcDYA+8l2Ygm4rEQ/IRIAcDHwl0P7B1F4ICuLNvA2bmV8R8m+QiUA4HaH9rvADHBCyb684joz5nkPfYVMAMALDn10EZ8rwbXAMtmCvwZO9tBf6AQMA1849LMC3OChv1KcBfxGttjfgfM89Rk6AQBn43abdQHFGTNDwEcZArvAKjKhwRcxEgBwI26XUT5HqiY6zzmI6yIz030SKwEAjzv010ViEZXbHIU1yZ5GHtMM+pxsC7nI9hVyvcdYSwf4DJhN7NPkMy+0gL3ALb4abABeE9JCjnoqdyZYI5aBb5CTuRngY+TqgBMt/O/omk4HuRf9LvAqcCTrB9o7u/VsS8iRV9/DWquAOMwit0KP9m4YNFHb8Mck8GLaBquAuFyH7Kj/wyogLmvuwFkC4nJ57wc2BMVllZ4bP5aA+Bw3B8+GIGUsAcpYApSxBChjCVDGEqCMJUAZS4AylgBlLAHKWAKUKZOAA8jl1QnkkZZRYAtwZ7Ktbqj5U+Re5z7glAFtjlGvpe9j+rOGvA38gttjLONU9+U/mv4cR5Eh6FnkSeMs5pPvVh11f1ym8fzfLsnR9qU529awmP6kJvq7nI2M5BA8WlJwDIvpz97eBtv03KV3YL2tqhjLnwX6rFVxEW5TkjRKNobF8Ocd+swoagPfA8/kEJFnsYs6LIwR0p9p4Bpk7tn+QV8cAt7CLZtHcDts20g9DkND+DONLIKeiyHgKdyGo1kGz4wfS76jHVxX8+XPDPKPL8UFyFtKszo7gJymb0GOJEaS396FzD7XDmpeK+vPQTy+HO7uwM6+5EtoDl4uodfF7vUpdgQ4FFDsrT7FOjJVQq9L9Xhff2iSMMuTdYAzfYt1YBw4VkBvli0DW0OJfjCA4PtCiXXg/gG6itrO0KJ3IQ+VlhW6CjwUWqwDtfRnO/L20aJi56jWSVkt/TkdeJR87xaYBx4BTost1oFK+FPkQtQwcD0y3eYK4HzEmS6yrOVPwJfIi5Ongb+9KA3HevPHMAzDqAn/ANr3qlVhJO4RAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);

export const SearchIcon = ({ color }) => (
  <Svg
    width={18}
    height={18}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29 29"
    fill={color}
  >
    <Path d="M11.854 21.854c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.588-8-8-8z" />
    <Path d="M26.146 27.146a.997.997 0 0 1-.707-.293l-7.694-7.694a.999.999 0 1 1 1.414-1.414l7.694 7.694a.999.999 0 0 1-.707 1.707z" />
  </Svg>
);

export const DownArrow = ({ width, height, color }) => (
  <Svg width={width} height={height} fill={color} viewBox="0 0 24 24">
    <Path
      d="m21.71 8.21-9 9a1 1 0 0 1-1.42 0l-9-9a1 1 0 1 1 1.42-1.42l8.29 8.3 8.29-8.3a1 1 0 1 1 1.42 1.42Z"
      data-name="20 Down Arrow"
    />
  </Svg>
);

export const EditIcon = ({ width, height, color }) => (
  <Svg width={width} height={height} fill={color} viewBox="0 0 29 29">
    <Path
      d="M0 15.042V19h4.374L17.276 7.327 12.902 3.37 0 15.042ZM20.659 4.266a.982.982 0 0 0 0-1.488l-2.73-2.47a1.25 1.25 0 0 0-1.645 0L14.15 2.24l4.374 3.958 2.135-1.932Z"
      fill={color}
      fillOpacity={0.7}
    />
  </Svg>
);

export const DeleteIcon = ({ width, height, color }) => (
  <Svg width={width} height={height} fill={color}>
    <Path fill="url(#a)" fillOpacity={0.7} d="M0 0h23v48H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.01042 0 0 .005 0 .26)" />
      </Pattern>
      <Image
        id="b"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACkElEQVR4nO3csW4TQRDG8T+RCEJCVEhUiMdAPEAK3gJeAxpK3gWJDt4EGkQBSYRMUgApgg3YFAeSC6Tcnufz7O59P+nKrG9nbma13ovBzMzMzMysLs+BzY7Xi73fdScigu8kTBQZfCehkCL41Sbh2oS/2YTfRV+KYnqgugsbxwlI5gQkcwKSOQHJnIBkToCZmZmZmVmjnqE7RKn1ehoRuKid8HHQOC0JmXNUAj4FjdOSkDm7AqYLmfOUM+H/OQQumc+Xe2vgJrDadaCogK2AL0FjtWBBQPAh9omdUxsKm2tkAua0EIfN1RUwTZUV4ARM4BY0jVtQMldAsrC5Rm3EYEjmJcOmrGcrhk3YOmKwyApYA6eB49XqhKDgQ/xXB3NoQ6FzjE7AHBbi0Dm6Asq5ApJVXQFOQCG3oHJuQclC5xi5EfvnG3BbMG4NLgiem+II8UQwZi0+Rg+oSEDP60B4i1UkoOd1IPzhcgLKNFEBbkEFXAFlmmhBroACin3ADYaDGcXYmTYMBzHLyEEVFbAEzgTjZlsQHHzQvcvZYxuSrG2qBPS4EEseKlfAeK6AZE5AMregZK6AZJKHSrVZOgB+ANdF4+9b6Ntw21QV0NtbcqcIgg/af6rrqQ3J1jRlAnpaiGUPkytgnCYroKcENFkBbkEjuALGabIFuQJGUJ9aXQC3xJ+hFv423Db1j2v00IaklewEXE06B3UCelgHXAHJmq6Ad+Lx9+Ft9g3s4i7wk/xfOJx6LYE74VHZoq6ABfBK/BlKL4Hz7JvY1X3gO/lPc+n1FbgniEeKI4bXFbODWtJ6Hkkikegh8IH84F51vQceiGKQ7hB4ArwBPgO/yQ/4r7/38hp4TD/n2GZmZmZmVqk/fn3WcYBRdW0AAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);

export const StarsIcon = ({ width, height, color }) => (
  <Svg width={width} height={height} fill={color}>
    <Path fill="url(#a)" d="M.145.284h48.604v14.221H.145z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.00257 0 0 .00879 0 -.067)" />
      </Pattern>
      <Image
        id="b"
        width={389}
        height={129}
        xlinkHref="data:image/jpeg;base64,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"
      />
    </Defs>
  </Svg>
);

export const MessengerIcon = ({ width, height }) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="url(#a)" d="M.27.142h23.289V17.41H.27z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.00772 0 0 .01042 .13 0)" />
      </Pattern>
      <Image
        id="b"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAFcElEQVR4nO2dTWhcVRTHf4mtndA0jbRaizJE3dS0WouIHy1S3BSFKooiftWuRK0fqFg34kr8QG0XdaFuWqQIFkVQqwh2o11odZUYhGr9QEuS1qLGpE3J2HFxZnAcO3M/3rvvvDdzf3A2eTPvnvO/M3fuO/fcG4hEIpFIJBKJRCKRSCQSiXQLPQptng9cDVwOXARcACwH+oCB2mumgOPABPBDzb4GvgB+zdjfwtMLXAtsR4SsJrRDwLbaPXszjKNwLAW2IoIlFb2VfQ88CSzJKKZC0A88BfxJOOGbbRp4ARjMIL5cswk4SnbCN9sR4O7gUeaQc4FP0BO+2T4GlgWNOEesBQ6jL3qzHQauCRh3LrgJOIG+2K3sJHBrsOiV2QxU0BfZZBXgnkAaqHEDMIe+uC6dcGMQJRS4DJn2aYvqalPAJQH0yJQSMIq+mL42hqQ8CssO9EVMattTVyUjLqZY434rqwArU9YmE/aiL15a9kHK2gRnJXAKfeHStFWpKuSJbTr3YXTWDkJyv7YDYCfqGcAknZfyPYosBP2t6YTNN2AtnSc+wNnAldpO2HTA+uBe6HGdtgM2HXBpcC/0UH8ytumA4eBe6KH+PGDTAZ04/tdZari+CNiCcvpiFv05eyg7YYh9Qe11E0iBwSJ72dJjBn2hQtlxQ+ylptePA7dYK5cSP6EjThY2YYh9WYv3vYVMYxNj8xvwWxoN5RRTbItb/P0OpFIv8SzKpgN+TtpIjhkzXD+nzbUysB/YkMQBmw74PEkDOWfEcN00TR0APgRu83XApgM+8715AdhnuG6TMZ0H7CbgU3U9Gaf9g5m2TWL+AO53uN8xZNEqCM85OFIU22GIeRD3FcAR4EyznO6UKUYNkK2dAlYYYr7d897PmOX0Y4+nQ3m09y3i3e1571kC5c/KFLMeqNnmMM9ulpCs5HKPWU4/nk7gVF7sFYs4n0jYRgUYsmjHmXpyqqg2iuR32jGfdHb1bDPL6Ye2iL42hd28/sGU2jtCoD1s2kL6WAXYaBFbP5LxTKvd1RZtOqMtpqvNAXdZxvZSym0/ZtmuE9qCutgscLNlXOuQEpU023/Psm0ntEW1tV+QDeE29CNbXtP2YdSyfSe0hbWxvbRPJTfSi3xSQ/hxzNIHJ7TFbWeTwJ2O8bwY0J+Tjr5YoS3y6ewPJAfjumi+JbBf047+WKEtdqMdBB4HzvKI4xHCV3z/6OGXEVcndiLljS8jgiUN6rvavdbhX7G9lWzK7Q+YHPEJoGr5uhngIWBX09+XI0WxV/Df42r6+XcI+Qv5+jYeV/MVclzNuIfPdUrAa8C9Ce7hwjskWK5shU3Pj5G/ksYh5BOZ5RD5aIhATI2+CSwM0bAnPcB9SC4oS/GrZJyKmEZ2z+eJYeBTshe+it2asxena+xbclDq3cB5wOvo7up8NlRwzQ3tJD9DzirgDaTmU0v4KpJ9LYcKMm9DziBySNM+dEVvtLdDBlxFd5bTiwx3DwAfIY/72oI32gwOy5HzPATYhczvZzzea8N85JlgANkYMQRciDwzDCMZzlZFs3ngeaSivJCUkKpj7U9xEluQuioZU0b34L+k1hFsIH9je1d1AMD15Ps8uo7vAChmJ3Qca5AUtLawXdsBINPOd9EXt2s7oM5G0jmBPXZAAvqQ9d/f0Re7KzugTgk5LPwb9EXvyg6o0wNchWyjGiG5gAeREsX1SKY3aAd02jFkIP8iZQ2Sml6N5JEGkR/yxcimw/qa8zhSuXAIWXP+kv+vOW8GXsU+5d6JmqqzAvtvVyQQfcgqW+wAZTbRfq9cJAPaDUmRjGg1JEUypnlIiijQOCRFlFiIPLhFIpFIJBKJRCKRSFv+AT/VjSxvLHSzAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);

export const CrossIcon = ({ width, height, color }) => (
  <Svg viewBox="0 0 101 101" width={width} height={height} fill={color}>
    <Path d="M83.9 17.1c-.9-.9-2.5-.9-3.4 0l-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4l30 30-30 30c-.9.9-.9 2.5 0 3.4.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l30-30 30 30c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4l-30-30 30-30c.9-.9.9-2.4 0-3.4z" />
  </Svg>
);

export const AddPhotoIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
    <Path fill="none" d="M0 0h24v24H0V0z" />
    <Path
      fill={"#404040"}
      d="M21.02 5H19V2.98c0-.54-.44-.98-.98-.98h-.03c-.55 0-.99.44-.99.98V5h-2.01c-.54 0-.98.44-.99.98v.03c0 .55.44.99.99.99H17v2.01c0 .54.44.99.99.98h.03c.54 0 .98-.44.98-.98V7h2.02c.54 0 .98-.44.98-.98v-.04c0-.54-.44-.98-.98-.98zM16 9.01V8h-1.01c-.53 0-1.03-.21-1.41-.58-.37-.38-.58-.88-.58-1.44 0-.36.1-.69.27-.98H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.28c-.3.17-.64.28-1.02.28A2 2 0 0 1 16 9.01zM15.96 19H6a.5.5 0 0 1-.4-.8l1.98-2.63c.21-.28.62-.26.82.02L10 18l2.61-3.48c.2-.26.59-.27.79-.01l2.95 3.68c.26.33.03.81-.39.81z"
    />
  </Svg>
);

export const PlusIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={"#FFFFFF"}>
    <Path
      fill={"#FFFFFF"}
      d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2Z"
    />
  </Svg>
);

export const CartIcon = () => (
  <Svg
    width={18}
    height={19}
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M9.161 7.091h1.708V4.48h2.562V2.74h-2.562V.125H9.161v2.612H6.6V4.48H9.16v2.612Zm-3.415 7.837c-.94 0-1.7.783-1.7 1.74 0 .959.76 1.742 1.7 1.742s1.708-.784 1.708-1.741c0-.958-.769-1.742-1.708-1.742Zm8.538 0c-.939 0-1.699.783-1.699 1.74 0 .959.76 1.742 1.7 1.742.939 0 1.707-.784 1.707-1.741 0-.958-.768-1.742-1.708-1.742Zm-8.393-2.83.026-.105.768-1.419h6.361c.64 0 1.204-.357 1.495-.897l3.296-6.103-1.486-.836h-.009l-.939 1.741-2.357 4.354H7.052l-.11-.235-1.913-4.119-.812-1.74L3.415.996H.623v1.741H2.33l3.074 6.609-1.152 2.133a1.71 1.71 0 0 0-.214.835c0 .958.769 1.742 1.708 1.742h10.246v-1.742H6.104a.219.219 0 0 1-.213-.217Z"
      fill="#000"
    />
  </Svg>
)

export const GotoIcon = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 188.111 188.111"
    style={{
      enableBackground: "new 0 0 188.111 188.111",
    }}
    xmlSpace="preserve"
    width={22}
    height={22}
    fill="#404040"
  >
    <Path fill="#404040" d="M122.735 55.676 53.951 82.395a7.5 7.5 0 0 0-.471 13.78l26.172 12.286 12.291 26.172a7.5 7.5 0 0 0 13.78-.472l26.719-68.778a7.501 7.501 0 0 0-9.707-9.707zm-24.656 56.737-6.001-12.778a7.498 7.498 0 0 0-3.602-3.601l-12.773-5.996 36.59-14.213-14.214 36.588z" />
    <Path fill="#404040" d="M94.052 0C42.192.001.001 42.194.001 94.055c0 51.862 42.191 94.056 94.052 94.057 51.864-.001 94.058-42.194 94.058-94.056C188.111 42.193 145.916 0 94.052 0zm0 173.111C50.463 173.11 15 137.646 15 94.054 15 50.464 50.462 15 94.052 14.999c43.593 0 79.058 35.464 79.058 79.056.001 43.591-35.465 79.055-79.058 79.056z" />
  </Svg>
)


export const WhatsappIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="#000000">
    <Path d="M15 3C8.373 3 3 8.373 3 15c0 2.251.632 4.35 1.71 6.15L3.108 27l5.975-1.568A11.935 11.935 0 0 0 15 27c6.627 0 12-5.373 12-12S21.627 3 15 3zm-4.107 6.402c.195 0 .395 0 .568.008.214.005.447.02.67.514.265.586.842 2.056.916 2.205.074.149.126.324.023.52-.098.2-.149.32-.293.497-.149.172-.312.386-.447.516-.149.15-.303.312-.13.61.171.296.769 1.27 1.652 2.056 1.135 1.014 2.092 1.326 2.39 1.475.298.149.47.126.643-.074.177-.195.743-.865.943-1.163.195-.298.394-.246.664-.148.274.098 1.735.818 2.033.967.298.149.494.223.569.344.077.125.077.72-.17 1.414-.247.693-1.46 1.363-2.004 1.41-.55.05-1.061.246-3.568-.74-3.024-1.191-4.932-4.289-5.08-4.489-.15-.195-1.211-1.61-1.211-3.07 0-1.465.768-2.183 1.037-2.48.274-.299.595-.372.795-.372z" />
  </Svg>
)
