import { Component, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChild('eventAppModal') eventAppModalRef!: ElementRef<HTMLDivElement>;
  @ViewChild('eventAppPlayer') eventAppVideoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('pomModal') pomModalRef!: ElementRef<HTMLButtonElement>;
  @ViewChild('pomPlayer') pomVideoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    // Aquí ya puedes usar modalRef y videoRef si necesitas hacer algo apenas el DOM esté listo.
  }

  showEventAppVideo(): void {
    const modal = this.eventAppModalRef.nativeElement;
    const video = this.eventAppVideoRef.nativeElement;

    modal.style.display = 'block';
    video.currentTime = 0;
    video.play();
  }

  closeEventAppVideo(): void {
    const modal = this.eventAppModalRef.nativeElement;
    const video = this.eventAppVideoRef.nativeElement;

    modal.style.display = 'none';
    video.pause();
  }

  showPomVideo(): void {
    const modal = this.pomModalRef.nativeElement;
    const video = this.pomVideoRef.nativeElement;

    modal.style.display = 'block';
    video.currentTime = 0;
    video.play();
  }
  closePomVideo(): void {
    const modal = this.pomModalRef.nativeElement;
    const video = this.pomVideoRef.nativeElement;

    modal.style.display = 'none';
    video.pause();
  }

}
