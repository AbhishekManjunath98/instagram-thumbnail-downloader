import { Button } from "@mui/material";
import React from "react";
import { Daum, Root } from "../extras/types";

const sampleURL =
  "https://i.ytimg.com/vi/QCtEe-zsCtQ/maxresdefault.jpg?v=631164ec";
const defImgageUrl =
  "https://igcdn.xyz/?token=470199d733eabeaa631e45f7326a3e4b894a51f5369ed6bab6f5786d30599f38&time=1704688894&file=https%3a%2f%2fscontent.cdninstagram.com%2fv%2ft51.2885-15%2f412623991_373303085380653_4214314084329870686_n.jpg%3fstp%3ddst-jpg_e15%26_nc_ht%3dscontent-ord5-1.cdninstagram.com%26_nc_cat%3d109%26_nc_ohc%3do4Rq112egP4AX_Hef1V%26edm%3dAP_V10EBAAAA%26ccb%3d7-5%26oh%3d00_AfB0p5ocGLcMF7U9OfckkhEO5ERn28iO_R0l8wRr-8urTA%26oe%3d659D3943%26_nc_sid%3d2999b8";

function Thumbnail(props: Daum) {
  function downloadThumbnail() {
    if (props.thumbnail_link === "" || props.thumbnail_link.length < 20) {
      alert("Something went wrong while generating thumbnail URL..");
      return;
    }
    window.open(props.thumbnail_link, "_blank");
  }

  return (
    <div>
      <div className="border border-gray-400 shadow-lg p-4 mt-4 mb-2">
        <img className="w-full" alt="" src={props.thumbnail_link} />
        <Button
          onClick={downloadThumbnail}
          className="w-full"
          sx={{ marginTop: "5px", color: "blue", fontWeight: "bold" }}
          variant="outlined"
        >
          Download Thumbnail [1]
        </Button>
        <Button
          onClick={downloadThumbnail}
          className="w-full"
          sx={{ marginTop: "5px", color: "white", fontWeight: "bold" }}
          variant="contained"
        >
          View Thumbnail [1]
        </Button>
      </div>
    </div>
  );
}

export default Thumbnail;
