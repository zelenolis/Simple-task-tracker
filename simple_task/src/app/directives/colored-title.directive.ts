import {
    Directive, ElementRef, Input, OnInit, Renderer2
} from "@angular/core";

import { Priorities } from "../interfaces/interfaces";

@Directive({
    selector: "[appColoredTitle]",
    standalone: true
})
export class ColoredTitleDirective implements OnInit {
    @Input() priority: Priorities = Priorities.low;

    constructor(private element: ElementRef, private renderer: Renderer2) { }

    private setColor() {
        if (this.priority === Priorities.high) {
            this.renderer.setStyle(this.element.nativeElement, "color", "var(--orange)");
        }
        if (this.priority === Priorities.neutral) {
            this.renderer.setStyle(this.element.nativeElement, "color", "var(--main)");
        }
        if (this.priority === Priorities.low) {
            this.renderer.setStyle(this.element.nativeElement, "color", "var(--gray)");
        }
    }

    ngOnInit(): void {
        this.setColor();
    }
}
