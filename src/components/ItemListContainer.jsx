import React from "react";
import '../styles/tailwind.min.css';

function BlackFriday(props) {
    return (
        <div class="py-2 bg-blue-500">
                    <div class="flex items-center justify-center">
                      <svg class="mr-2" width="18" height="11" viewbox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="3.07129" width="4" height="10" rx="2" transform="rotate(-45 0 3.07129)" fill="white"></rect><rect x="8" y="2.82861" width="4" height="10" rx="2" transform="rotate(-45 8 2.82861)" fill="white"></rect></svg>
                      <p class="text-xs font-bold font-heading text-blue-50">BlackFriday {props.descuento} OFF en compras mayores a $3000</p>
                    </div>
                  </div>
    );
    }
    export default BlackFriday;