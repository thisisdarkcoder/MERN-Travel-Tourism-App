import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const PackageCard = ({ packageData }) => {
  return (
    <Link to={`/package/${packageData._id}`} className="w-max">
      <div className="bg-white border flex flex-col items-center p-3 rounded shadow-md overflow-hidden">
        <img
          className="w-[90%] h-[170px] xsm:w-[250px] xsm:h-[190px] rounded border hover:scale-110  transition-all duration-300"
          src={packageData.packageImages[0]}
          alt="Package Image"
        />
        <div className="w-full flex flex-col my-2">
          <p className="font-semibold capitalize">{packageData.packageName}</p>
          <p className="text-green-700 capitalize">
            {packageData.packageDestination}
          </p>
          {(+packageData.packageDays > 0 || +packageData.packageNights > 0) && (
            <p className="flex items-center gap-2">
              <FaClock />
              {+packageData.packageDays > 0 &&
                (+packageData.packageDays > 1
                  ? packageData.packageDays + " Days"
                  : packageData.packageDays + " Day")}
              {+packageData.packageDays > 0 &&
                +packageData.packageNights > 0 &&
                " - "}
              {+packageData.packageNights > 0 &&
                (+packageData.packageNights > 1
                  ? packageData.packageNights + " Nights"
                  : packageData.packageNights + " Night")}
            </p>
          )}
          {/* price & rating */}
          <div className="flex flex-wrap justify-between">
            {packageData.packageTotalRatings > 0 && (
              <p className="flex">
                <Rating
                  value={packageData.packageRating}
                  size="medium"
                  readOnly
                  precision={0.1}
                />
                ({packageData.packageTotalRatings})
              </p>
            )}
            {packageData.packageDiscountPrice ? (
              <p className="flex gap-1">
                <span className="line-through text-gray-700">
                  ${packageData.packageDiscountPrice}
                </span>
                -
                <span className="font-medium text-green-700">
                  ${packageData.packagePrice}
                </span>
              </p>
            ) : (
              <p className="font-medium text-green-700">
                ${packageData.packagePrice}
              </p>
            )}
          </div>
          {/* price & rating */}
        </div>
      </div>
    </Link>
  );
};

export default PackageCard;
