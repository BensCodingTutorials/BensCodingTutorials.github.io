// import the required animation functions from the angular animations module
import { trigger, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [

        // route 'enter' transition
        transition(':enter', [

            // css styles at start of transition
            style({ opacity: 0, }),
            animate('.6s'),

            // animation and styles at end of transition
            animate('.6s', style({ opacity: 1 }))
        ]),

          // route 'enter' transition
          transition(':leave', [

            // css styles at start of transition
            style({ opacity: 1 }),

            // animation and styles at end of transition
            animate('.2s', style({ opacity: 0 }))
        ]),
    ]);