import useSharedStyles from "../SharedStyles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  pageTitle: {
    width: "30%",
    "@media (max-width: 1000px)": {
      width: "60%",
      paddingTop: "20px",
    },
  },
});

function Favourites() {
  const sharedStyles = useSharedStyles();
  const styles = useStyles();

  return (
    <div className={sharedStyles.page}>
      <svg
        className={styles.pageTitle}
        viewBox="0 0 410 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.0297 41L14.9297 71H0.929688L8.22969 0.999995H51.1297L49.8297 13H20.9297L19.3297 29H42.2297L40.9297 41H18.0297ZM94.5359 0.999995L112.236 71H98.4359L94.6359 55.9H68.4359L61.6359 71H47.8359L80.1359 0.999995H94.5359ZM85.4359 18.6L73.9359 43.9H91.6359L85.6359 18.6H85.4359ZM182.938 0.999995L150.638 71H135.238L117.538 0.999995H131.738L144.638 53.9H144.838L168.738 0.999995H182.938ZM240.698 64.8L228.398 71.5H197.098L186.198 64.8L192.298 7.2L204.598 0.499996H235.898L246.798 7.2L240.698 64.8ZM205.698 12.5L200.798 59.5H227.298L232.198 12.5H205.698ZM310.182 71H294.782L282.482 44.6H273.782L271.082 71H257.082L264.382 0.999995H302.282L313.182 7.7L309.982 37.9L297.682 44.6L310.182 71ZM277.082 13L275.082 32.6H296.582L298.582 13H277.082ZM323.586 71L330.886 0.999995H344.886L337.586 71H323.586ZM358.243 35.5L361.243 7.2L373.543 0.499996H398.843L409.743 7.2L408.343 20.5H394.343L395.143 12.5H374.643L372.843 29.2H395.743L406.643 35.9L403.643 64.8L391.343 71.5H365.043L354.143 64.8L355.543 51.5H369.543L368.743 59.5H390.243L392.043 42.2H369.143L358.243 35.5Z"
          fill="#FFD600"
        />
        <path
          d="M18.0297 41V39H16.2257L16.0403 40.7944L18.0297 41ZM14.9297 71V73H16.7337L16.9191 71.2056L14.9297 71ZM0.929688 71L-1.05952 70.7926L-1.28973 73H0.929688V71ZM8.22969 0.999995V-1H6.42741L6.24048 0.792549L8.22969 0.999995ZM51.1297 0.999995L53.1181 1.2154L53.3581 -1H51.1297V0.999995ZM49.8297 13V15H51.6247L51.8181 13.2154L49.8297 13ZM20.9297 13V11H19.1197L18.9396 12.801L20.9297 13ZM19.3297 29L17.3396 28.801L17.1197 31H19.3297V29ZM42.2297 29L44.2181 29.2154L44.4581 27H42.2297V29ZM40.9297 41V43H42.7247L42.9181 41.2154L40.9297 41ZM16.0403 40.7944L12.9403 70.7944L16.9191 71.2056L20.0191 41.2056L16.0403 40.7944ZM14.9297 69H0.929688V73H14.9297V69ZM2.9189 71.2074L10.2189 1.20744L6.24048 0.792549L-1.05952 70.7926L2.9189 71.2074ZM8.22969 3H51.1297V-1H8.22969V3ZM49.1413 0.784589L47.8413 12.7846L51.8181 13.2154L53.1181 1.2154L49.1413 0.784589ZM49.8297 11H20.9297V15H49.8297V11ZM18.9396 12.801L17.3396 28.801L21.3198 29.199L22.9198 13.199L18.9396 12.801ZM19.3297 31H42.2297V27H19.3297V31ZM40.2413 28.7846L38.9413 40.7846L42.9181 41.2154L44.2181 29.2154L40.2413 28.7846ZM40.9297 39H18.0297V43H40.9297V39ZM94.5359 0.999995L96.4749 0.509712L96.0932 -1H94.5359V0.999995ZM112.236 71V73H114.805L114.175 70.5097L112.236 71ZM98.4359 71L96.4964 71.4881L96.8769 73H98.4359V71ZM94.6359 55.9L96.5755 55.4119L96.195 53.9H94.6359V55.9ZM68.4359 55.9V53.9H67.1432L66.6123 55.0788L68.4359 55.9ZM61.6359 71V73H62.9287L63.4596 71.8212L61.6359 71ZM47.8359 71L46.0199 70.162L44.7104 73H47.8359V71ZM80.1359 0.999995V-1H78.8561L78.3199 0.162043L80.1359 0.999995ZM85.4359 18.6V16.6H84.1481L83.6152 17.7724L85.4359 18.6ZM73.9359 43.9L72.1152 43.0724L70.8299 45.9H73.9359V43.9ZM91.6359 43.9V45.9H94.1657L93.582 43.4385L91.6359 43.9ZM85.6359 18.6L87.582 18.1385L87.2171 16.6H85.6359V18.6ZM92.597 1.49028L110.297 71.4903L114.175 70.5097L96.4749 0.509712L92.597 1.49028ZM112.236 69H98.4359V73H112.236V69ZM100.375 70.5119L96.5755 55.4119L92.6964 56.3881L96.4964 71.4881L100.375 70.5119ZM94.6359 53.9H68.4359V57.9H94.6359V53.9ZM66.6123 55.0788L59.8123 70.1788L63.4596 71.8212L70.2596 56.7212L66.6123 55.0788ZM61.6359 69H47.8359V73H61.6359V69ZM49.6519 71.838L81.9519 1.83795L78.3199 0.162043L46.0199 70.162L49.6519 71.838ZM80.1359 3H94.5359V-1H80.1359V3ZM83.6152 17.7724L72.1152 43.0724L75.7567 44.7276L87.2567 19.4276L83.6152 17.7724ZM73.9359 45.9H91.6359V41.9H73.9359V45.9ZM93.582 43.4385L87.582 18.1385L83.6899 19.0615L89.6899 44.3615L93.582 43.4385ZM85.6359 16.6H85.4359V20.6H85.6359V16.6ZM182.938 0.999995L184.754 1.83795L186.064 -1H182.938V0.999995ZM150.638 71V73H151.918L152.454 71.838L150.638 71ZM135.238 71L133.299 71.4903L133.681 73H135.238V71ZM117.538 0.999995V-1H114.97L115.599 1.49028L117.538 0.999995ZM131.738 0.999995L133.681 0.526167L133.309 -1H131.738V0.999995ZM144.638 53.9L142.695 54.3738L143.067 55.9H144.638V53.9ZM144.838 53.9V55.9H146.129L146.661 54.7234L144.838 53.9ZM168.738 0.999995V-1H167.447L166.916 0.176545L168.738 0.999995ZM181.122 0.162043L148.822 70.162L152.454 71.838L184.754 1.83795L181.122 0.162043ZM150.638 69H135.238V73H150.638V69ZM137.177 70.5097L119.477 0.509712L115.599 1.49028L133.299 71.4903L137.177 70.5097ZM117.538 3H131.738V-1H117.538V3ZM129.795 1.47382L142.695 54.3738L146.581 53.4262L133.681 0.526167L129.795 1.47382ZM144.638 55.9H144.838V51.9H144.638V55.9ZM146.661 54.7234L170.561 1.82345L166.916 0.176545L143.016 53.0765L146.661 54.7234ZM168.738 3H182.938V-1H168.738V3ZM240.698 64.8L241.654 66.5563L242.576 66.0543L242.687 65.0106L240.698 64.8ZM228.398 71.5V73.5H228.907L229.354 73.2563L228.398 71.5ZM197.098 71.5L196.05 73.2039L196.532 73.5H197.098V71.5ZM186.198 64.8L184.209 64.5894L184.076 65.8435L185.15 66.5039L186.198 64.8ZM192.298 7.2L191.341 5.44366L190.419 5.9457L190.309 6.98937L192.298 7.2ZM204.598 0.499996V-1.5H204.088L203.641 -1.25634L204.598 0.499996ZM235.898 0.499996L236.945 -1.20386L236.463 -1.5H235.898V0.499996ZM246.798 7.2L248.787 7.41063L248.919 6.15654L247.845 5.49615L246.798 7.2ZM205.698 12.5V10.5H203.895L203.708 12.2926L205.698 12.5ZM200.798 59.5L198.808 59.2926L198.578 61.5H200.798V59.5ZM227.298 59.5V61.5H229.1L229.287 59.7074L227.298 59.5ZM232.198 12.5L234.187 12.7074L234.417 10.5H232.198V12.5ZM239.741 63.0437L227.441 69.7437L229.354 73.2563L241.654 66.5563L239.741 63.0437ZM228.398 69.5H197.098V73.5H228.398V69.5ZM198.145 69.7961L187.245 63.0961L185.15 66.5039L196.05 73.2039L198.145 69.7961ZM188.187 65.0106L194.287 7.41063L190.309 6.98937L184.209 64.5894L188.187 65.0106ZM193.254 8.95634L205.554 2.25633L203.641 -1.25634L191.341 5.44366L193.254 8.95634ZM204.598 2.5H235.898V-1.5H204.598V2.5ZM234.85 2.20385L245.75 8.90385L247.845 5.49615L236.945 -1.20386L234.85 2.20385ZM244.809 6.98937L238.709 64.5894L242.687 65.0106L248.787 7.41063L244.809 6.98937ZM203.708 12.2926L198.808 59.2926L202.787 59.7074L207.687 12.7074L203.708 12.2926ZM200.798 61.5H227.298V57.5H200.798V61.5ZM229.287 59.7074L234.187 12.7074L230.208 12.2926L225.308 59.2926L229.287 59.7074ZM232.198 10.5H205.698V14.5H232.198V10.5ZM310.182 71V73H313.342L311.99 70.1441L310.182 71ZM294.782 71L292.969 71.8446L293.507 73H294.782V71ZM282.482 44.6L284.295 43.7554L283.757 42.6H282.482V44.6ZM273.782 44.6V42.6H271.976L271.792 44.3965L273.782 44.6ZM271.082 71V73H272.888L273.072 71.2035L271.082 71ZM257.082 71L255.093 70.7926L254.863 73H257.082V71ZM264.382 0.999995V-1H262.58L262.393 0.792549L264.382 0.999995ZM302.282 0.999995L303.329 -0.703858L302.848 -1H302.282V0.999995ZM313.182 7.7L315.171 7.91074L315.304 6.65658L314.229 5.99615L313.182 7.7ZM309.982 37.9L310.939 39.6563L311.86 39.1543L311.971 38.1107L309.982 37.9ZM297.682 44.6L296.725 42.8437L295.066 43.7477L295.874 45.4559L297.682 44.6ZM277.082 13V11H275.276L275.092 12.797L277.082 13ZM275.082 32.6L273.092 32.397L272.868 34.6H275.082V32.6ZM296.582 32.6V34.6H298.388L298.572 32.803L296.582 32.6ZM298.582 13L300.572 13.203L300.796 11H298.582V13ZM310.182 69H294.782V73H310.182V69ZM296.595 70.1554L284.295 43.7554L280.669 45.4446L292.969 71.8446L296.595 70.1554ZM282.482 42.6H273.782V46.6H282.482V42.6ZM271.792 44.3965L269.092 70.7965L273.072 71.2035L275.772 44.8035L271.792 44.3965ZM271.082 69H257.082V73H271.082V69ZM259.071 71.2074L266.371 1.20744L262.393 0.792549L255.093 70.7926L259.071 71.2074ZM264.382 3H302.282V-1H264.382V3ZM301.235 2.70385L312.135 9.40385L314.229 5.99615L303.329 -0.703858L301.235 2.70385ZM311.193 7.48926L307.993 37.6893L311.971 38.1107L315.171 7.91074L311.193 7.48926ZM309.025 36.1437L296.725 42.8437L298.639 46.3563L310.939 39.6563L309.025 36.1437ZM295.874 45.4559L308.374 71.8559L311.99 70.1441L299.49 43.7441L295.874 45.4559ZM275.092 12.797L273.092 32.397L277.072 32.803L279.072 13.203L275.092 12.797ZM275.082 34.6H296.582V30.6H275.082V34.6ZM298.572 32.803L300.572 13.203L296.592 12.797L294.592 32.397L298.572 32.803ZM298.582 11H277.082V15H298.582V11ZM323.586 71L321.597 70.7926L321.367 73H323.586V71ZM330.886 0.999995V-1H329.084L328.897 0.792549L330.886 0.999995ZM344.886 0.999995L346.875 1.20744L347.105 -1H344.886V0.999995ZM337.586 71V73H339.388L339.575 71.2074L337.586 71ZM325.575 71.2074L332.875 1.20744L328.897 0.792549L321.597 70.7926L325.575 71.2074ZM330.886 3H344.886V-1H330.886V3ZM342.897 0.792549L335.597 70.7926L339.575 71.2074L346.875 1.20744L342.897 0.792549ZM337.586 69H323.586V73H337.586V69ZM358.243 35.5L356.254 35.2892L356.121 36.5434L357.196 37.2039L358.243 35.5ZM361.243 7.2L360.286 5.44366L359.365 5.94563L359.254 6.98917L361.243 7.2ZM373.543 0.499996V-1.5H373.034L372.586 -1.25634L373.543 0.499996ZM398.843 0.499996L399.89 -1.20386L399.408 -1.5H398.843V0.499996ZM409.743 7.2L411.732 7.40937L411.864 6.15607L410.79 5.49615L409.743 7.2ZM408.343 20.5V22.5H410.143L410.332 20.7094L408.343 20.5ZM394.343 20.5L392.353 20.301L392.133 22.5H394.343V20.5ZM395.143 12.5L397.133 12.699L397.353 10.5H395.143V12.5ZM374.643 12.5V10.5H372.847L372.654 12.2857L374.643 12.5ZM372.843 29.2L370.854 28.9857L370.616 31.2H372.843V29.2ZM395.743 29.2L396.79 27.4961L396.309 27.2H395.743V29.2ZM406.643 35.9L408.632 36.1065L408.762 34.855L407.69 34.1961L406.643 35.9ZM403.643 64.8L404.6 66.5563L405.524 66.053L405.632 65.0065L403.643 64.8ZM391.343 71.5V73.5H391.852L392.3 73.2563L391.343 71.5ZM365.043 71.5L363.996 73.2039L364.477 73.5H365.043V71.5ZM354.143 64.8L352.154 64.5906L352.022 65.8439L353.096 66.5039L354.143 64.8ZM355.543 51.5V49.5H353.742L353.554 51.2906L355.543 51.5ZM369.543 51.5L371.533 51.699L371.753 49.5H369.543V51.5ZM368.743 59.5L366.753 59.301L366.533 61.5H368.743V59.5ZM390.243 59.5V61.5H392.046L392.232 59.707L390.243 59.5ZM392.043 42.2L394.032 42.407L394.262 40.2H392.043V42.2ZM369.143 42.2L368.096 43.9039L368.577 44.2H369.143V42.2ZM360.232 35.7108L363.232 7.41083L359.254 6.98917L356.254 35.2892L360.232 35.7108ZM362.2 8.95634L374.5 2.25633L372.586 -1.25634L360.286 5.44366L362.2 8.95634ZM373.543 2.5H398.843V-1.5H373.543V2.5ZM397.796 2.20385L408.696 8.90385L410.79 5.49615L399.89 -1.20386L397.796 2.20385ZM407.754 6.99063L406.354 20.2906L410.332 20.7094L411.732 7.40937L407.754 6.99063ZM408.343 18.5H394.343V22.5H408.343V18.5ZM396.333 20.699L397.133 12.699L393.153 12.301L392.353 20.301L396.333 20.699ZM395.143 10.5H374.643V14.5H395.143V10.5ZM372.654 12.2857L370.854 28.9857L374.831 29.4143L376.631 12.7143L372.654 12.2857ZM372.843 31.2H395.743V27.2H372.843V31.2ZM394.696 30.9039L405.596 37.6039L407.69 34.1961L396.79 27.4961L394.696 30.9039ZM404.654 35.6935L401.654 64.5935L405.632 65.0065L408.632 36.1065L404.654 35.6935ZM402.686 63.0437L390.386 69.7437L392.3 73.2563L404.6 66.5563L402.686 63.0437ZM391.343 69.5H365.043V73.5H391.343V69.5ZM366.09 69.7961L355.19 63.0961L353.096 66.5039L363.996 73.2039L366.09 69.7961ZM356.132 65.0094L357.532 51.7094L353.554 51.2906L352.154 64.5906L356.132 65.0094ZM355.543 53.5H369.543V49.5H355.543V53.5ZM367.553 51.301L366.753 59.301L370.733 59.699L371.533 51.699L367.553 51.301ZM368.743 61.5H390.243V57.5H368.743V61.5ZM392.232 59.707L394.032 42.407L390.054 41.993L388.254 59.293L392.232 59.707ZM392.043 40.2H369.143V44.2H392.043V40.2ZM370.19 40.4961L359.29 33.7961L357.196 37.2039L368.096 43.9039L370.19 40.4961Z"
          fill="#1E3172"
        />
      </svg>
    </div>
  );
}

export default Favourites;
